import React from "react";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: "300px",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "Arial, sans-serif",
  };

  
  const maskedNumber = "•••• •••• •••• " + number.slice(-4);

  
  const formattedMonth = expirationMonth.toString().padStart(2, "0");
  const formattedYear = expirationYear.toString().slice(-2);

 
  const cardLogo =
    type === "Visa"
      ? "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
      : "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png";

  return (
    <div style={cardStyle}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={cardLogo} alt={type} style={{ height: "30px" }} />
      </div>

      <h2 style={{ fontSize: "1.5em", letterSpacing: "2px", margin: "20px 0" }}>
        {maskedNumber}
      </h2>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9em" }}>
        <div>
          Expires {formattedMonth}/{formattedYear}
        </div>
        <div>{bank}</div>
      </div>

      <div style={{ marginTop: "10px", fontSize: "0.9em" }}>{owner}</div>
    </div>
  );
}

export default CreditCard;
