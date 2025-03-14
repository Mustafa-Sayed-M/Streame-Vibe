import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// Pages:
import Home from "./Pages/Home";
import Movies from "./Pages/Movies/Movies";
import Movie from "./Pages/Movies/Movie/Movie";
import Show from "./Pages/Shows/Show/Show";
import Shows from "./Pages/Shows/Shows";
import Support from "./Pages/Support";
import Subscriptions from "./Pages/Subscriptions";
import Search from "./Pages/Search";
// Components:
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import ScrollFromTop from "./Pages/ScrollFromTop";

function App() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname !== "/") {
      document.documentElement.style.setProperty("scroll-padding-top", "84px");
    } else {
      document.documentElement.style.removeProperty("scroll-padding-top");
    }
  }, [pathname]);

  return (
    <div className="App bg-black-color-8 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Scroll From Top When Change Route */}
      <ScrollFromTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:showId" element={<Show />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* Subscribe */}
      <Subscribe />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;