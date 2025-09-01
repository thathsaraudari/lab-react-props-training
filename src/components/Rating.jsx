import React from "react";

function Rating({ children }) {
  
  const rounded = Math.round(children);

  
  const stars = "★★★★★".slice(0, rounded) + "☆☆☆☆☆".slice(0, 5 - rounded);

  return <div style={{ fontSize: "2em" }}>{stars}</div>;
}

export default Rating;