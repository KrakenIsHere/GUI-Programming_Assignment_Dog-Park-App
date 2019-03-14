import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "../../styles/CustomS";

//Main Holder for page / application
const App = ({ children }) => (
  <>
    <Header />
    <br/>

    <main>
      {children}
    </main>

    <br/>
    <Footer />
  </>
);

export default App;
