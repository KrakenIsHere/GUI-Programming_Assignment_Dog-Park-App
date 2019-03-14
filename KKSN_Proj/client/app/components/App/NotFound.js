import React from 'react';
import { Link } from 'react-router-dom';


//Error 404 Page
const NotFound = () => (
  <div className="NotFoundPage">
    <br />
    <div className="NotFoundText">
    <h1 className="centered-text darkred">ERROR 404</h1>
      <h3 className="centered-text darkred">Page not found</h3>
    </div>
  </div>
);

export default NotFound;
