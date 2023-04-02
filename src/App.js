import React from "react";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<SingleMovie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
