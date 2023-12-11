import React from "react";

const Test = ({ children }) => {
  return (
    <div>
      {children}
      <p style={{ color: "green" }}>asdf</p>
    </div>
  );
};

export default Test;
