import React from "react";
import About from "./About";
import Faqs from "./Faqs";
import Header from "./Header";
import Nfts from "./Nfts";
import Picture from "./Picture";
import Roadmap from "./Roadmap";
import Tiger from "./Tiger";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Nfts />
      <Roadmap />
      <Faqs />
      <Picture />
      <Tiger />
    </div>
  );
};

export default Home;
