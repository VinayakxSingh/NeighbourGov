import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components and Pages
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Initiative from "./pages/initiative";
import VotingPage from "./pages/Voting";
import Notifications from "./pages/notifications";
import News from "./pages/News";
import Profile from "./pages/Profile";
import ThemeToggleButton from "./components/themetogglebutton";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initiative" element={<Initiative />} />
        <Route
          path="/voting/:initiativeId"
          element={
            <PrivateRoute>
              <VotingPage />
            </PrivateRoute>
          }
        />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
      <ThemeToggleButton />
    </Router>
  );
}

export default App;
