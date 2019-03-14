import React, { Component } from 'react';
import dataset from '../../../../Data/OdenseHundeParker'

//primary map and request sender (E-Mail)
class Map extends  Component {
  constructor(props) {
    super(props);

    this.state = {
      isParksSet: false
    };

    this.parkSelectClick = this.parkSelectClick.bind(this);
    this.sendMailClick = this.sendMailClick.bind(this);
  }

  // Configuration
  // ================================================================================================

  sendMailClick() {
    var select = document.getElementById('park-select');
    var senderMail = document.getElementById('senderMail');
    var resciverMail = document.getElementById('resciverMail');
    var mailText = document.getElementById('mailText');

      fetch('/api/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          park: select.value,
          sm: senderMail.value,
          rm: resciverMail.value,
          text: mailText.value
        }),
      }).then(res => res.json())
          .then(json => {
            console.log('json', json);
      })
  }

  //Inserting parkdata into select as options
  parkSelectClick() {
    //checks if the selector have already gotten its data
    if (this.state.isParksSet == false) {
      //Gets the select object
      var dropdown = document.getElementById('park-select');

      //Loops through all the parks (features)
      for (var i = 0; i < dataset.features.length; i++) {
        //Creates a new option every time to be put into the select object
        var option = document.createElement('option');

        //sets the option's value
        option.value = dataset.features[i].properties.placering;
        //sets the option's displayed text
        option.textContent = dataset.features[i].properties.placering;
        //Adds the option to the select object as a child
        dropdown.appendChild(option);
      }

      //Indicates that the select object has now gotten its data
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

                      <select id="park-select" className="btn bg-white max-width text-middle" onClick={this.parkSelectClick} required>
                        <option value="">-- Park --</option>
                      </select>

                      <br/>
                      <br/>

                      <input type="email" className="form-control" id="senderMail" placeholder="Your@E-mail.com" required/>

                      <br/>

                      <input type="email" className="form-control" id="resciverMail" placeholder="Recipient@E-mail.com" required/>

                      <br/>

                      <textarea className="form-control" id="mailText" placeholder="Message minimum 20 characters" rows="4" minlength="20" required></textarea>

                    </div>
                  </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success" type="submit" onClick={this.sendMailClick}>Send Request</button>
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
