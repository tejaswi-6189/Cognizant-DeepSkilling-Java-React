import React from "react";

function IndianPlayers() {

    const players = [
        { name: "Jack", score: 50 },
        { name: "Michael", score: 70 },
        { name: "John", score: 40 },
        { name: "Ann", score: 61 },
        { name: "Elisabeth", score: 61 },
        { name: "Sachin", score: 95 },
        { name: "David", score: 84 },
        { name: "Virat", score: 84 },
        { name: "Raina", score: 75 },
        { name: "Rohit", score: 80 }
    ];

    const flag = false;

    const oddPlayers = ["Sachin", "Virat", "Rohit"];
    const evenPlayers = ["Dhoni", "Yuvraj", "Raina"];

    const T20players = [
        "First Player",
        "Second Player",
        "Third Player"
    ];

    const RanjiPlayers = [
        "Fourth Player",
        "Fifth Player",
        "Sixth Player"
    ];

    const mergedPlayers = [...T20players, ...RanjiPlayers];

    return (
        <div>

            {flag ? (
                <>
                    <h2>List of Players</h2>

                    <ul>
                        {players.map((p, i) => (
                            <li key={i}>
                                Mr. {p.name} {p.score}
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <h2>List of Players having Scores Less than 70</h2>

                    <ul>
                        {players
                            .filter(p => p.score < 70)
                            .map((p, i) => (
                                <li key={i}>
                                    Mr. {p.name} {p.score}
                                </li>
                            ))}
                    </ul>
                </>
            ) : (
                <>
                    <h2>Odd Players</h2>

                    <ul>
                        {oddPlayers.map((p, i) => (
                            <li key={i}>
                                {i * 2 + 1}: {p}
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <h2>Even Players</h2>

                    <ul>
                        {evenPlayers.map((p, i) => (
                            <li key={i}>
                                {i * 2 + 2}: {p}
                            </li>
                        ))}
                    </ul>

                    <hr />

                    <h2>List of Indian Players Merged:</h2>

                    <ul>
                        {mergedPlayers.map((p, i) => (
                            <li key={i}>Mr. {p}</li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    );
}

export default IndianPlayers;