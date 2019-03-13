import React, { Component } from 'react';
import dataset from '../../../../Data/OdenseHundeParker'

class Map extends  Component {
  constructor(props) {
    super(props);

    this.state = {
      isParksSet: false
    };

    this.parkSelectClick = this.parkSelectClick.bind(this);
  }

  componentDidMount() {
    var map = document.getElementById('map');
  }

  parkSelectClick() {
    if (this.state.isParksSet == false) {
    var dropdown = document.getElementById('park-select');

      for (var i = 0; i < dataset.features.length; i++) {
        var option = document.createElement('option');
        console.log(dataset.features[i].properties.placering);
        option.value = dataset.features[i].properties.placering;
        option.textContent = dataset.features[i].properties.placering;
        dropdown.appendChild(option);
      }

      this.setState({
        isParksSet: true
      });
    }
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

                      <select id="park-select" className="btn bg-white max-width text-middle" onClick={this.parkSelectClick}>
                        <option>-- Park --</option>
                      </select>

                      <br/>
                      <br/>

                      <input type="email" className="form-control" id="senderMail" placeholder="Your@E-mail.com" required/>

                      <br/>

                      <input type="email" className="form-control" id="resciverMail" placeholder="Recipient@E-mail.com" required/>

                      <br/>

                      <textarea className="form-control" id="mailText" placeholder="Message" rows="4" required></textarea>

                    </div>
                  </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success" type="submit">Send Request</button>
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
