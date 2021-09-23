import React, { Component } from "react";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Table from "../components/Table";
import Header from "../components/Header";
import SearchFrom from "../components/SearchFrom";
import employeeAPI from "../utils/employeeAPI";

class Home extends Component {
  state = {
    employees: [],
    userEmployees: "",
    filterEmployees: [],
    isAlph: false,
  };

  componentDidMount() {
    this.SearchEmp();
  }

  SearchEmp = () => {
    employeeAPI
      .employeeSearch()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results,
        })
      )
      .catch((err) => this.setState({ error: err.message }));
  };

  // searches through list of 
  handleInputChange = (event) => {
    // event.preventDefault();
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => this.filter(event.target.value)
    );
    console.log(this.state.userEmployees);
  };

  filter = () => {
    if (!this.state.userEmployees) {
      this.setState({ filterEmployees: this.state.employees });
    } else {
      let newEmp = this.state.employees.filter((emp) =>
        emp.name.first.toLowerCase().includes(this.state.userEmployees.toLowerCase())
      );
      console.log(newEmp);

      this.setState({ filterEmployees: newEmp });
      console.log(this.state.filterEmployees);
    }
  };

  // sorts employee first names
  handleClick = () => {
    if (this.state.isAlph) {
      console.log("true");
      this.state.filterEmployees.sort((a, b) =>
        a.name.first.localeCompare(b.name.first)
      );
      console.log(this.state.filterEmployees);

      this.setState({ isAlph: false });
    } else {
      console.log("false");
      this.state.filterEmployees.sort((a, b) =>
        b.name.first.localeCompare(a.name.first)
      );
      console.log(this.state.filterEmployees);

      this.setState({ isAlph: true });
    }
  };

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <Container>
            <Row>
              <Col size="md-3">
                <SearchFrom
                  handleInputChange={this.handleInputChange}
                  input={this.state.userEmployees}
                />
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <Table
                  employees={this.state.filterEmployees}
                  handleClick={this.handleClick}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Home;
