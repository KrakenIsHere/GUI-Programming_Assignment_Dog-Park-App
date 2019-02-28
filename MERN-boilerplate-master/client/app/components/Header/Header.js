import React, { Component }from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

class Header extends Component {
   constructor(props) {
     super(props);

     this.state = {
       token: '',
     };
   }

     render() {
       const {
         token,
       } = this.state;

       if (!token) {
         return (
           <header>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <NavLink className="navbar-brand" to="/">ESS</NavLink>
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                   <li className="nav-item">
                     <NavLink className="nav-link" activeClassName="nav-link active" exact={true} to="/">Home</NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink className="nav-link" activeClassName="nav-link active" to="/Map">Map</NavLink>
                   </li>
                 </ul>
                 <form className="form-inline my-2 my-lg-0 navbar-nav">
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" to="/Register">Register</NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" to="/Login">Login</NavLink>
                 </li>
                 </form>
               </div>
             </nav>

           </header>
         )
       }
       else {
         return (
           <header>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <NavLink className="navbar-brand" to="/">ESS</NavLink>
                 <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                   <li className="nav-item">
                     <NavLink className="nav-link" activeClassName="nav-link active" exact={true} to="/">Home</NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink className="nav-link" activeClassName="nav-link active" to="/Map">Map</NavLink>
                   </li>
                 </ul>
                 <form className="form-inline my-2 my-lg-0 navbar-nav">
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" to="/Login">Account</NavLink>
                 </li>
                 </form>
               </div>
             </nav>

           </header>
         )
       }
   }
 }

export default Header;
