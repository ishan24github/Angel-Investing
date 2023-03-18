import React from "react";

import Header from "./Header";
import Navbar from "./Navbar";
import Showcase from "./Showcase";
import Newsletter from "./Newsletter";
import Cards from "./Cards";
import FAQs from "./FAQs";
import Features from "./Features";

const Show = () => {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Newsletter/>
      <Features/>
      <Cards />
      <FAQs/>
    </div>
  );
};

export default Show;
