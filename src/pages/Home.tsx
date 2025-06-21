import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Configurators from '../components/Configurators';
import Contact from '../components/Contact';
import Partners from '../components/Partners';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Configurators />
      <Partners />
      <Contact />
    </>
  );
}