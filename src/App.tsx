//import React from 'react';
import FurnitureSection from './components/FurnitureSection/FurnitureSection';
import Header from './components/Header/Header';
import BestSellerProducts from './components/BestSellerProducts/BestSellerProducts';
import BestServices from './components/BestServices/BestServices';
import FeaturedPosts from './components/FeaturedPosts/FeaturedPosts';
import WhatTheySay from './components/Reviews/Reviews';
import BetterExperience from './components/BetterExperience/BetterExperience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <FurnitureSection /> <br />
      <BestSellerProducts /> <br />
      <BestServices /> <br />
      <FeaturedPosts /> <br />
      <WhatTheySay /> <br />
      <BetterExperience /> <br />
      <Footer />
    </div>
  );
}

export default App;
