import React, { useState,useEffect } from "react"
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home  />}/>
    </Routes>
  );
}

export default App;
