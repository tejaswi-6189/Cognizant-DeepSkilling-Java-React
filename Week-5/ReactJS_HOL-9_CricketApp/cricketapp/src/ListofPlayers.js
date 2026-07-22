import React from "react";

function ListofPlayers() {

    const players = [
        "Virat Kohli",
        "Rohit Sharma",
        "MS Dhoni",
        "Hardik Pandya",
        "KL Rahul",
        "Jasprit Bumrah",
        "Ravindra Jadeja",
        "Shubman Gill",
        "Rishabh Pant",
        "Mohammed Shami",
        "Suryakumar Yadav"
    ];

    return (
        <div>
            <h2>List of Players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;