// Output component to display the results of the code execution

import React from "react";

const outputStyle = {
    height: "50%",
    width: "100%",
    borderRadius: "10px",
    border: "2px solid #ddd",
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
}
function Output({ output }) {
  return (
    <div style={outputStyle}>
        Output
      {output}
    </div>
  );
}

export default Output;