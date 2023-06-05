import React from 'react';
import Header1 from './components/header1';
import Header2 from './components/header2';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Section7 from './components/section7';
import Section8 from './components/section8';
import Section9 from './components/section9';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Message from './components/message';


const App = () => {
  return (
    <div className="p-0 m-0 overflow-hidden font-sans">
      <Message/>
      <Header1 />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9/>
      <Footer/>
    </div>
  );
};

export default App;
