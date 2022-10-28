import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
  const data ={
    name:'WBK Store'
  }
  return (
    <>
      <Hero mydata={data}/>
    </>
  );
};

export default Home;
