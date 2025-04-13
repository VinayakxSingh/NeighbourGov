import React, { useState, useEffect } from "react";
import Notifications from "./pages/notifications"; // Adjust the path as necessary

const ParentComponent = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      notification,
    ]);
  };

  // Function to simulate a voting action (in your real app, this will be tied to user actions)
  const handleVote = (voteType, initiativeTitle) => {
    const notification = {
      id: Date.now(), // Unique id based on timestamp
      title: "Vote Recorded",
      message: `You voted ${voteType} for the issue: ${initiativeTitle}.`,
      timestamp: new Date().toLocaleString(),
    };

    addNotification(notification); // Add the notification when a vote is placed
  };

  // Simulate voting process for demonstration
  useEffect(() => {
    // For testing: You can simulate voting action by calling handleVote()
    handleVote("Thumbs Up", "Broken Streetlights");
    handleVote("Thumbs Down", "Water Leakage");
  }, []);

  return (
    <div>
      <Notifications notifications={notifications} />
      {/* Other content can go here */}
    </div>
  );
};

export default ParentComponent;
