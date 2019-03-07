import React, { Component } from 'react';

class Map extends  Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.searchButtonClick = this.searchButtonClick.bind(this);
  }

searchButtonClick(event) {
  var zipcode = document.getElementById('ZipBox');

  console.log(zipcode);

  var map = document.getElementById('map');

  map.src = "https://maps.google.com/maps?q=dog+park+" + zipcode.value + "&output=embed";

  console.log(map.source);
}

render() {
  return (
    <div className="row">
      <div className="container mt-5" >
          <div className="row">
            <div className="col-md-6 maps" >
            <iframe id="map" width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
            src="https://maps.google.com/?q=dog+park&output=embed"
            style={{border:0}} allowFullScreen></iframe>
            </div>
            <div className="col-md-6">
              <h2 className="text-uppercase mt-3 font-weight-bold text-white">Find Park:</h2>

              <input id="ZipBox" placeholder="Zipcode" type="number" min="0" max="999999"/>

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
                    <button className="btn btn-success" type="button" onClick={this.searchButtonClick}>Search</button>
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
