import React, { Component }from 'react';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';


//Header / Navbar
class Header extends Component {
   constructor(props) {
     super(props);

     this.state = {
       isLoading: true,
       token: '',
     };
   }

   componentDidMount() {
     const obj = getFromStorage('the_main_app');
     if (obj && obj.token) {
       const { token } = obj;

       // Verify token
       fetch('/api/account/verify?token=' + token)
         .then(res => res.json())
         .then(json => {
           if (json.success) {
             this.setState({
               token,
               isLoading: false
             });
           } else {
             this.setState({
               isLoading: false,
             });
           }
         });
     } else {
       this.setState({
         isLoading: false,
       });
     }
   }

   //It is possible you will need to comment componentDidUpdate() make a user and then uncomment it (Below)

   componentDidUpdate() {
     const obj = getFromStorage('the_main_app');
     if (obj && obj.token) {
       const { token } = obj;

       // Verify token
       fetch('/api/account/verify?token=' + token)
         .then(res => res.json())
         .then(json => {
           if (json.success) {
             this.setState({
               token,
               isLoading: false
             });
           } else {
             this.setState({
               isLoading: false,
             });
           }
         });
     } else {
       this.setState({
         isLoading: false,
       });
     }
   }

   //It is possible you will need to comment componentDidUpdate() make a user and then uncomment it (The Above)


   render() {
     const {
       isLoading,
       token,
     } = this.state;

     if (!token) {
       return (
         <header>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarToggler">
             <NavLink className="navbar-brand" to="/">ESS</NavLink>
               <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" exact={true} to="/">Home</NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" to="/Contact">Contact</NavLink>
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
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarToggler">
             <NavLink className="navbar-brand" to="/">ESS</NavLink>
               <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" exact={true} to="/">Home</NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" to="/SendRequest">Send Request</NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" to="/SRT">SRT (Test Only)</NavLink>
                 </li>
                 <li className="nav-item">
                   <NavLink className="nav-link" activeClassName="nav-link active" to="/Contact">Contact</NavLink>
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
