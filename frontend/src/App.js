import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import Movies from "./components/Movie/Movies";
import About from "./components/About";
import MovieDetail from "./components/Movie/MovieDetail";
import Cart from "./components/cart";

import React, { useEffect, useState } from "react";
import axios from "axios";

// function App() {

const URL = "http://localhost:5000/movies";

const App = () => {
  const [cart, setCart] = useState([]);
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setMovies(data.movies));
  }, []);

  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };

  const handleCart = (movie) => {
    //adds movies to cart state after clicking Book button
    if (cart.indexOf(movie) !== -1) return;
    setCart([...cart, movie]);
  };

  const handleChange = (movie, d) => {
    const ind = cart.indexOf(movie);
    alert(movie.name);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    alert("handlechange");
  };

  // useEffect(() => {
  //   console.log("cart updated");
  // }, [cart]);

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddMovie />} exact />
          <Route
            path="/movies"
            element={<Movies movies={movies} handleCart={handleCart} />}
            exact
          />
          <Route path="/about" element={<About />} exact />
          <Route path="/movies/:id" element={<MovieDetail />} exact />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
            exact
          />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
