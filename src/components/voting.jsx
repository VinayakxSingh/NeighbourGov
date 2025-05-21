import React from "react";
import { Link } from "react-router-dom";
import "../styles/voting.css";

const Voting = () => {
  return (
    <section className="voting-container">
      <div className="voting-content">
        <h1 className="voting-title">Welcome to the Voting Page</h1>
        <p className="voting-description">
          Your voice matters! Participate in the democratic process by voting on
          important community issues.
        </p>
        <p className="voting-instruction">
          Please select an issue to vote on from the{" "}
          <Link to="/initiative" className="initiative-link">
            Initiatives Page
          </Link>
          .
        </p>
        {/* <img src="/vote.png" alt="Vote Illustration" className="voting-image" /> */}
      </div>
    </section>
  );
};

export default Voting;
