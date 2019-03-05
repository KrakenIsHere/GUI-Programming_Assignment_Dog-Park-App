import React, { Component } from 'react';

class Map extends  Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.selectorDrop = this.selectorDrop.bind(this);
  }
/*
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

// Close the dropdown if the user clicks outside of it
handleClick(event) {
  if (!event.target.matches('.selector')) {
    event.target.className = "selector";
  }
}
*/
selectorDrop(event) {
  event.target.className = "selector";
}

selectorChanged(event) {
  var map = document.getElementById('map');

  map.source = "https://maps.google.com/maps?q=denmark&t=&z=6&ie=UTF8&iwloc=&output=embed";
}

render() {
  return (
    <div className="row" id="contact">
      <div className="container mt-5" >
          <div className="row">
            <div className="col-md-6 maps" >
            <iframe id="map" width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=denmark&t=&z=6&ie=UTF8&iwloc=&output=embed"
            style={{border:0}} allowFullScreen></iframe>
            </div>
            <div className="col-md-6">
              <h2 className="text-uppercase mt-3 font-weight-bold text-white">CONTACT</h2>
              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control mt-2" placeholder="Name" required/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="text" className="form-control mt-2" placeholder="Last name" required/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="email" className="form-control mt-2" placeholder="Email" required/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input type="number" className="form-control mt-2" placeholder="Phone" required/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3" required></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                      <label className="form-check-label" htmlFor="invalidCheck2">
                        Accept the conditions
                      </label>
                    </div>
                  </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light" type="submit">Submit</button>
                  </div>
                </div>
              </form>
              <div className="text-white">
              <h2 className="text-uppercase mt-4 font-weight-bold">Other methods</h2>

              <select className="selector text-muted" onClick={this.selectorDrop} onchanged="">
                <option value="Denmark" disabled selected hidden>Select Park</option>
                <option value="Germany">Germany</option>
                <option value="Norway">Norway</option>
                <option value="Odense">Odense</option>
              </select>

              <br />

              <i className="fas fa-phone mt-3"></i> <a href="tel:+">(+39) 123456</a><br/>
              <i className="fas fa-phone mt-3"></i> <a href="tel:+">(+39) 123456</a><br/>
              <i className="fa fa-envelope mt-3"></i> <a href="">info@test.it</a><br/>
              <i className="fas fa-globe mt-3"></i> Piazza del Colosseo, 1, 00184 Rome<br/>
              <i className="fas fa-globe mt-3"></i> Piazza del Colosseo, 1, 00184 Rome<br/>

              </div>
            </div>
          </div>
      </div>
  </div>
    );
  }
}
export default Map;
