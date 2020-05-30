import React from 'react';
import './index.css';
import Header from './component/header';
import SectionOne from './component/sectionone';
import SectionTwo from './component/sectiontwo';
import SectionThree from './component/sectionthree';
import SectionFour from './component/sectionfour';
import SectionFive from './component/sectionfive';
import Footer from './component/footer';

function App() {

  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />      
      <SectionFour />
      <SectionFive />
      <Footer />
    </div >
  );
}

export default App;
