import React, { useState } from "react";
import Slider from "../../components/slider/Slider";
import Props from "../../components/props/Props";
import { books } from "../../data/books";
import BookSlider from "../../components/bookSlider/BookSlider";

const Home = () => {
  return (
    <>
      <Slider />
      <Props />
      <BookSlider title="Most Gifted" booksList={books} />
      <BookSlider title="Best Seller" booksList={books} />
      <BookSlider title="Most Wished For" booksList={books} />
    </>
  );
};

export default Home;
