import React, { Component } from 'react';
import 'whatwg-fetch';
import '../../utils/Bootstrap/bootstrap.bundle.min.js'

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signUpEmail: '',
      signUpPassword1: '',
      signUpPassword2: '',
    };

    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangesignUpPassword1 = this.onTextboxChangesignUpPassword1.bind(this);
    this.onTextboxChangesignUpPassword2 = this.onTextboxChangesignUpPassword2.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
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

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangesignUpPassword1(event) {
    this.setState({
      signUpPassword1: event.target.value,
    });
  }

  onTextboxChangesignUpPassword2(event) {
    this.setState({
      signUpPassword2: event.target.value,
    });
  }

  onSignUp() {
      // Grab state
      const {
        signUpEmail,
        signUpPassword1,
        signUpPassword2,
      } = this.state;

      console.log(signUpPassword1);
      console.log(signUpPassword2);

      if (signUpPassword1 == signUpPassword2)
      {
        this.setState({
          isLoading: true,
        });

        // Post request to backend
        fetch('/api/account/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: signUpEmail,
            password: signUpPassword1,
          }),
        }).then(res => res.json())
          .then(json => {
            console.log('json', json);
            if (json.success) {
              this.setState({
                signUpError: json.message,
                isLoading: false,
                signUpEmail: '',
                signUpPassword1: '',
                signUpPassword2: '',
              });
            } else {
              this.setState({
                signUpError: json.message,
                isLoading: false,
              });
            }
          });
        }
    else {
      var message = document.getElementsById('ErrorMessage');

      message.innerHtml = signUpError;
    }
  }

  render() {
    const {
      isLoading,
      token,
      signUpEmail,
      signUpPassword1,
      signUpPassword2,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      return (

        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  <form className="form-signin">
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
                      type="email"
                      placeholder="Email"
                      value={signUpEmail}
                      onChange={this.onTextboxChangeSignUpEmail}/>

                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                      type="password"
                      placeholder="Password"
                      value={signUpPassword1}
                      onChange={this.onTextboxChangesignUpPassword1}/>

                      <label htmlFor="inputPassword">Password</label>
                    </div>
                    <div className="form-label-group">
                      <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required
                      type="password"
                      placeholder="Password"
                      value={signUpPassword2}
                      onChange={this.onTextboxChangesignUpPassword2}/>
                      <label htmlFor="inputConfirmPassword">Confirm password</label>
                      <p id="ErrorMessage" className="text-danger">{ signUpError }</p>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.onSignUp}>Register</button>
                    <hr/>
                    <a className="btn btn-lg btn-primary btn-block text-uppercase" href="Login">Login</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}


export default Register;
