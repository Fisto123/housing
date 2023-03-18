import React from "react";
import Discover from "./components/Discover";
import Enquiry from "./components/Enquiry";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Meet from "./components/Meet";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Search from "./components/Search";
import Slide from "./components/Slide";

const App = () => {
  return (
    <div className=" app">
      <Navbar />
      <Search />
      <Discover />
      <Enquiry />
      <Explore />
      <Questions />
      <Meet />
      <Footer />
    </div>
  );
};

export default App;
