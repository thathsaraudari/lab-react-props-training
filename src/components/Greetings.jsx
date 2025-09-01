import React from "react";

const Greetings = ({ lang, children }) => {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      {greetings[lang] || "Hello"} {children}
    </div>
  );
};

export default Greetings;