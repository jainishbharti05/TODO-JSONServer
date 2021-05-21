import React from "react";

const SearchNote = (props) => {
  return (
    <div className="d-flex flex-row w-100 my-3">
      <input
        onChange={props.onInputChange}
        className="form-control mx-1"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchNote;
