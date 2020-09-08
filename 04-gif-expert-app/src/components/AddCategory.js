//rafc
import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      console.log("Submit echo");
      setcategories((cats) => [inputValue, ...cats]);
      setinputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
};
