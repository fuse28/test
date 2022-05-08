import "./App.css";
import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";

function App() {
  return (
    <div className="navbar">
      <button className="home">Home</button>
      <button className="about">About</button>
      <button className="contacts">Contacts</button>
      <Banner />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
