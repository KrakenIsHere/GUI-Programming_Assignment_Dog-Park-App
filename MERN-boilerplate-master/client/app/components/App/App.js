import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "../../styles/CustomS";

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
