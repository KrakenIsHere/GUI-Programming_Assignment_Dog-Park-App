import React, { Component } from 'react';

class Map extends  Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.parkSelectClick = this.parkSelectClick.bind(this);
  }

  componentDidMount() {
    var map = document.getElementById('map');
  }

  parkSelectClick() {
    var dropdown = document.getElementById('park-select');

    const url = 'https://portal.opendata.dk/dataset/62fe5392-9bb6-49c5-ba41-3a1b0297a3c2/resource/37816225-3471-4fd5-a855-66b9780baf8d/download/hundeskoveoghundeparker.json';

    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
          option.text = data[i].name;
          option.value = data[i].abbreviation;
          dropdown.add(option);
        }
       } else {
        // Reached the server, but it returned an error
      }
    }

    request.onerror = function() {
      console.error('The above error occurred while fetching the JSON from ' + url);
    };

    request.send();
  }

render() {
  return (
    <div className="row">
      <div className="container mt-5" >
          <div className="row">
            <div className="col-md-6 maps" >

            <iframe id="map" width="100%" height="400" frameBorder="0"  scrolling="no" marginHeight="0" marginWidth="0"
            src="https://portal.opendata.dk/dataset/hundeskove-og-hundeparkerd1c72/resource/37816225-3471-4fd5-a855-66b9780baf8d/view/efcef7ed-7efd-450e-9fa5-444b1043c66b"
            style={{border:0}} allowFullScreen></iframe>
            </div>

            <div className="col-md-6">

              <form action="">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="white-text">Select Park:</h2>
                  </div>
                  <div className="col-12">
                  <div className="form-group">
                    <div className="form-check">
                      <select className="park-select" onClick={this.parkSelectClick}>
                        <option>-- Park --</option>
                      </select>

                    </div>
                  </div>
                  </div>
                  <div className="col-12">

                  </div>
                </div>
              </form>
            </div>
          </div>
      </div>
  </div>
    );
  }
}
export default Map;
