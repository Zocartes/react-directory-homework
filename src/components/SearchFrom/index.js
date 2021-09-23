import React from "react";
import "./style.css";

function SearchFrom(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          onChange={props.handleInputChange}
          value={props.input}
          name="userEmployees"
          type="text"
          className="form-control"
          placeholder="Type here"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchFrom;
