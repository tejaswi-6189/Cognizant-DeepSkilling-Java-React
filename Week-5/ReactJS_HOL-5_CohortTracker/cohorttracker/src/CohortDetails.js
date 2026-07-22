import React from "react";
import styles from "./CohortDetails.module.css";

const cohorts = [
  {
    id: 1,
    name: ".NET FSD",
    startedOn: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose"
  },
  {
    id: 2,
    name: "Java FSD",
    startedOn: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith"
  },
  {
    id: 3,
    name: "Java FSD",
    startedOn: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aasthma",
    trainer: "John Doe"
  }
];

function CohortDetails() {
  return (
    <div>
      {cohorts.map((item) => (
        <div className={styles.box} key={item.id}>
          <h3
            style={{
              color:
                item.status === "Ongoing"
                  ? "green"
                  : "blue"
            }}
          >
            {item.name}
          </h3>

          <dl>
            <dt>Started On</dt>
            <dd>{item.startedOn}</dd>

            <dt>Current Status</dt>
            <dd>{item.status}</dd>

            <dt>Coach</dt>
            <dd>{item.coach}</dd>

            <dt>Trainer</dt>
            <dd>{item.trainer}</dd>
          </dl>
        </div>
      ))}
    </div>
  );
}

export default CohortDetails;