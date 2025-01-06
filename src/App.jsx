/*import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">
            <img src="/img 2.jpg" alt="Logo" className="logo-image" />
            <span className="logo-name">MyWebsite</span>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/aboutus" className="nav-link">About Us</Link>
            <Link to="/contactus" className="nav-link">Contact Us</Link>
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
//dynamic images
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

 
  const images = [
    "img 3.png",
    "img 4.png",
    "img 5.jpg",
  ];

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    
    if (newValue.trim() !== "") {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div>
      <h1>Images</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: "10px",
          margin: "20px 0",
          fontSize: "16px",
        }}
      />
      {inputValue.trim() && (
        <div>
          <img
            src={images[imageIndex]}
            alt={`Dynamic ${imageIndex}`}
            style={{
              display: "block",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;*/
//hen
/*import React from "react";
import Hen from "./Hen";
import "./App.css";

const App = () => {
  const need = "Nutrition"; // Data to be passed down

  return (
    <div>
      <h1>Props Drilling Example</h1>
      <Hen need={need} />
    </div>
  );
};

export default App;*/
//now
/*import React from "react";
import {createContext} from "react"
import Hen from "./Hen";
import "./App.css";

export let nameContext=createContext();
function App()
{
  return(
    <nameContext.Provider value="water">
      <Hen/>
    </nameContext.Provider>
  )
}

export default App;*/
/*import React, { useState, createContext } from "react";
import Hen from "./Hen";
import "./App.css";

export let nameContext = createContext();

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(false);

  const toggleBackground = () => {
    setIsBlackBackground((prev) => !prev);
  };

  const appStyle = {
    height: "100vh",
    backgroundColor: isBlackBackground ? "black" : "white",
    color: isBlackBackground ? "white" : "black",
    transition: "background-color 0.5s, color 0.5s",
  };

  return (
    <nameContext.Provider value={{ value: "water", toggleBackground, isBlackBackground }}>
      <div style={appStyle}>
        <Hen />
      </div>
    </nameContext.Provider>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;

