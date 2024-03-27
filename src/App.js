import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Partners from './components/Partners/Partners';
import Resedency from './components/Resedency/Resedency';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <Partners/>
      <Resedency/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;