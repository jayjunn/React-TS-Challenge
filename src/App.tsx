import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css";

/**
 * The starting page for your App
 */

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
