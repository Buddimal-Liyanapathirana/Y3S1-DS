import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movie/Movies";
import About from "./components/About";
import MovieDetail from "./components/Movie/MovieDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMovie />} exact />
          <Route path="/movies" element={<Movies />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/movies/:id" element={<MovieDetail />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
