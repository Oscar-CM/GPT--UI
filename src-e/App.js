import React from 'react';


import { Blog, Feature, Footer, Header, Possibility, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar} from './components';
import './App.css'

const App = () => {
  return (
    /* <div>
      <div>
        <h1> Hello People </h1>
      </div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>

      </div>
       */
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
      
      
    </div>
  )
}

export default App