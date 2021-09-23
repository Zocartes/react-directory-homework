import React from "react";
import "./style.css";

function Table(props) {
  let emps = Array.from(props.employees);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Headshots</th>
          <th scope="col" className="cursor" onClick={props.handleClick}>
            Name
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>

      <tbody>
        {emps.map((employee) => (
          <tr>
            <td>
              <img src={employee.picture.thumbnail} />
            </td>
            <td>{employee.name.first + " " + employee.name.last}</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
            <td>{new Date().toISOString(employee.dob.date).split("T")[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
