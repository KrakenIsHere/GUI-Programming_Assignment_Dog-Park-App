import React, { Component } from 'react';

class Map extends  Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.selectorDrop = this.selectorDrop.bind(this);
    this.parkDropSelectionChanged = this.parkDropSelectionChanged.bind(this);
  }
selectorDrop(event) {
  event.target.className = "selector";
}

parkDropSelectionChanged(event) {
  var map = document.getElementById('map');

    console.log(event.content);

}

render() {
  return (
    <div className="row" id="contact">
      <div className="container mt-5" >
          <div className="row">
            <div className="col-md-6 maps" >
            <iframe id="map" width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=dog+park&t=&z=6&ie=UTF8&iwloc=&output=embed"
            style={{border:0}} allowFullScreen></iframe>
            </div>
            <div className="col-md-6">
              <h2 className="text-uppercase mt-3 font-weight-bold text-white">Find Park:</h2>

              <select className="selector text-muted" onClick={this.selectorDrop} onChanged={this.parkDropSelectionChanged}>
                <option value="Denmark" disabled selected hidden>Country</option>
                <option value="Germany">Germany</option>
                <option value="Norway">Norway</option>
                <option value="Odense">Odense</option>
              </select>

              <br/>
              <br/>

              <select className="selector text-muted" onClick={this.selectorDrop} onChanged={this.parkDropSelectionChanged}>
                <option value="Odense" disabled selected hidden>City</option>
                <option value="Germany">Germany</option>
                <option value="Norway">Norway</option>
                <option value="Odense">Odense</option>
              </select>

              <br/>
              <br/>

              <select className="selector text-muted" onClick={this.selectorDrop} onChanged={this.parkDropSelectionChanged}>
                <option value="" disabled selected hidden>Park</option>
                <option value="Germany">Germany</option>
                <option value="Norway">Norway</option>
                <option value="Odense">Odense</option>
              </select>

              <form action="">
                <div className="row">
                  <div className="col-lg-6">

                  </div>
                  <div className="col-12">
                  <div className="form-group">
                    <div className="form-check">

                    </div>
                  </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success" type="submit">Search</button>
                  </div>
                </div>
              </form>
              <div className="text-white">

              </div>
            </div>
          </div>
      </div>
  </div>
    );
  }
}
export default Map;
