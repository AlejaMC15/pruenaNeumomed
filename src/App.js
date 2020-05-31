import React from 'react';
import './index.css';
import Header from './component/header';
import SectionOne from './component/Sectionone';
import SectionTwo from './component/SectionTwo';
import SectionThree from './component/SectionThree';
import SectionFour from './component/SectionFour';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}

export default App;
