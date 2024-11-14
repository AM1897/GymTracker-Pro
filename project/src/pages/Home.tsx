import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
    </div>
  );
};

export default Home;