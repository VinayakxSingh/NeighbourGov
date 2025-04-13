import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import "../styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg("Invalid credentials or user does not exist.");
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <section className="profile-page">
      <h2>👤 User Profile</h2>

      {user ? (
        <div className="profile-info">
          <div className="checkmark">✅</div>
          <h3>You are logged in</h3>
          <p>
            Email: <strong>{user.email}</strong>
          </p>
          <button className="logout-btn" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className="login-form">
          <h3>Please Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </div>
      )}
    </section>
  );
};

export default Profile;
