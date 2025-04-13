import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import "../styles/profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Added for signup
  const [errorMsg, setErrorMsg] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup

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
      console.log(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setErrorMsg("");
    } catch (error) {
      setErrorMsg("Failed to create an account.");
      console.log(error);
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
        <div className="auth-form">
          <h3>{isSignUp ? "Create an Account" : "Please Login"}</h3>
          <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
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
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
          </form>
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
          <button
            className="toggle-form-btn"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Profile;
