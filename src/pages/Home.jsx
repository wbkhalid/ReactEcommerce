import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {
  const data ={
    name:'WBK Store'
  }
  return (
    <>
      <Hero mydata={data}/>
      <Services/>
      <Trusted/>
    </>
  );
};

export default Home;
