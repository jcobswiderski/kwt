

import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";
import './css/index.css';

function App() {

  // W celu usunięcia dynamicznego tła zakomentuj cały useEffect!
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 100,
        size: {
          min: 2,
          max: 8,
          pulse: 0
        },
        speed: {
          x: { min: 0, max: 0.4 },
          y: { min: 0, max: 0.6 }
        },
        colors: {
          background: "#330033",
          particles: [
            "#fbfcca",
            "#d7f3fe",
            "#ffd0a7"
          ]
        },
        blending: "overlay",
        opacity: {
          center: 1,
          edge: 0
        },
        skew: 0,
        shapes: ["c"]
      });
    }
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
