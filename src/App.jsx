import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import VisitingDoctors from './components/VisitingDoctors';
import Timings from './components/Timings';
import Location from './components/Location';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Doctors />
      <VisitingDoctors />
      <Services />
      <Timings />
      <Location />
      <Contact />
    </Layout>
  );
}

export default App;
