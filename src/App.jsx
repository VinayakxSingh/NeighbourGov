import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components and Pages
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Initiative from "./pages/initiative";
import VotingPage from "./pages/Voting.jsx";
import Notifications from "./pages/notifications.jsx";
import News from "./pages/news.jsx";
import Profile from "./pages/profile.jsx";
import ThemeToggleButton from "./components/themetogglebutton";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Voting from "./components/voting.jsx";
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
        <Route path="/voting" element={<Voting />}></Route>
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
