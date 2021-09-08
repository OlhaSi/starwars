import React from "react";

import "./button.css";

const Button = (props) => (
  <button type="button" className="btn" onClick={() => props.onClick()}>
    Next
  </button>
);

export default Button;
