import React from "react";

const IdCard = ({lastName, firstName, gender, height, birth, picture  }) => {
    return (
        <div style={{ display: "flex", border: "1px solid #121212ff", margin: "10px", padding: "10px" }}>
            <img src={picture} alt={firstName} style={{ marginRight: "15px", width: "200px" }} />
                <div>
                    <p><strong>First Name:</strong> {firstName} </p>
                    <p><strong>Last Name:</strong> {lastName} </p>
                    <p><strong>Gender:</strong> {gender} </p>
                    <p><strong>Height:</strong> {height}cm </p>
                    <p><strong>Birth:</strong> {birth.toDateString()} </p>
                </div>
        </div>
    )
}
export default IdCard;