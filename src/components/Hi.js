import React from "react";

const Hi = () => {
  return React.createElement(
    "div",
    {id: 'Hello' , className:"dummy class"},
    React.createElement("h1", null, "Hello Nepal")
  );
};
export default Hi;
