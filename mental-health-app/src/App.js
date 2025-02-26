import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./views/Index";
import LandingPage from "./views/examples/Landing"; // Import Landing Page
import ProfilePage from "./views/examples/Profile"; // Import Profile Page
import LoginPage from "./views/examples/Login"; // Import Login Page
import RegisterPage from "./views/examples/Register"; // Import Register Page

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
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
