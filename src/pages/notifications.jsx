import React, { useEffect, useState } from "react";
import "../styles/notifications.css";

const Notifications = ({ notifications }) => {
  // Using notifications passed from ParentComponent to render them
  const [notificationList, setNotificationList] = useState(notifications || []);

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      setNotificationList(notifications); // Update notification list on changes
    }
  }, [notifications]);

  const clearAll = () => setNotificationList([]); // Clear all notifications

  return (
    <section className="notifications-page">
      <h2 className="notif-title">Your Notifications</h2>

      {notificationList.length > 0 ? (
        <>
          <ul className="notif-list">
            {notificationList.map((n) => (
              <li key={n.id} className="notif-card">
                <h4>{n.title}</h4>
                <p>{n.message}</p>
                <span className="notif-time">{n.timestamp}</span>
              </li>
            ))}
          </ul>
          <button className="clear-btn" onClick={clearAll}>
            Clear All
          </button>
        </>
      ) : (
        <p className="no-notifs">No notifications right now 📭</p>
      )}
    </section>
  );
};

export default Notifications;
