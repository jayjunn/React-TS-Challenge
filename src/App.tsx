import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./global.css";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

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
            <Route path={"/"} element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
