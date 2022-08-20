import React from "react";

function Button({ type }) {
  return <button className={"" + `button-${type}`}></button>;
}

export default Button;
