import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./views/Index"; // Importimi i vetëm i Index.js

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} /> {/* Rruga kryesore për Index */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
