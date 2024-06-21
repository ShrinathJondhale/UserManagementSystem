import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

function Button({
  children,
  primary,
  success,
  warning,
  danger,
  buttonType,
  onClick,
  style,
}) {
  let type = null;
  primary
    ? (type = "primary")
    : success
    ? (type = "success")
    : warning
    ? (type = "warning")
    : danger
    ? (type = "danger")
    : (type = null);

  return (
    <button className={`btn btn-${type}`} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

export default Button;
