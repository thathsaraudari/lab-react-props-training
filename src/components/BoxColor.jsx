import React from "react";

function BoxColor({ r, g, b }) {
 
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    border: "1px solid #ccc",
    margin: "10px 0",
    padding: "20px",
    textAlign: "center",
    color: r + g + b > 400 ? "black" : "white", // choose text color for contrast
  };

  
  const toHex = (value) => value.toString(16).padStart(2, "0");
  const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  return (
    <div style={divStyle}>
      rgb({r},{g},{b}) <br />
      {hexColor}
    </div>
  );
}

export default BoxColor;
