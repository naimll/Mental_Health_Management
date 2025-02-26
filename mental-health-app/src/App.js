import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./views/Index";
import LandingPage from "./views/examples/Landing"; // Import Landing Page
import ProfilePage from "./views/examples/Profile"; // Import Profile Page
import LoginPage from "./views/examples/Login"; // Import Login Page
import RegisterPage from "./views/examples/Register"; // Import Register Page
import "./assets/scss/argon-design-system-react.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
