import React, { Component } from 'react';

class Home extends Component {
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

      if (token) {
        return (
          <p className="white-text">loggedin</p>
        )
      }
      else {
        return (
          <p className="white-text">not loggedin</p>
        )
      }
  }
}

export default Home;
