import React, { Component } from 'react';
import Geonames from 'geonames.js';

const geonames = new Geonames({username: 'thewickedkraken', lan: 'en', encoding: 'JSON'});

class Map0 extends  Component {
  constructor(props) {
    super(props);

    this.state = {
      isCountriesSet: false,
      isStatesSet: false,
      isRegionSet: false,
      isCitySet: false,
    };

    this.selectorDrop = this.selectorDrop.bind(this);
    this.searchButtonClick = this.searchButtonClick.bind(this);
    this.setCountrySelectorOptions = this.setCountrySelectorOptions.bind(this);
    this.setStateSelectorOptions =this.setStateSelectorOptions.bind(this);
  }

componentDidMount() {
  var country = document.getElementById('Country');
  var city = document.getElementById('City');
  var park = document.getElementById('Park');

  var i = 0;

  // promise
  geonames.search({q: 'CONT'}) //get continents
  .then(resp => {
    console.log(resp.geonames);
  })
  .catch(err => console.error(err));

  // promise
  geonames.countryInfo({})
  .then(countries => {
    console.log(countries.geonames);
    return geonames.children({geonameId: countries.geonames[58].geonameId})
  })
  .then(states => {
    console.log(states.geonames);
    return geonames.children({geonameId: states.geonames[0].geonameId});
  })
  .then(regions => {
    console.log(regions.geonames);
    return geonames.children({geonameId: regions.geonames[0].geonameId});
  })
  .then(cities => {
    console.log(cities.geonames);
  })
  .catch(err => {
    console.log(err)
  });
}

setCountrySelectorOptions() {
  var country = document.getElementById('Country');

  geonames.countryInfo({})
  .then(countries => {

    for (var i = 0; i < countries.geonames.length; i++) {
      var option = document.createElement('option');
      option.value = countries.geonames[i].geonameId;
      option.textContent = countries.geonames[i].countryName;
      country.appendChild(option);
    }
  })
  .catch(err => {
    console.log(err)
  });

  this.setState({isCountriesSet: true});
}

setStateSelectorOptions() {
  var country = document.getElementById('Country');
  var state = document.getElementById('State');

  geonames.countryInfo({})
  .then(countries => {
    return geonames.children({geonameId: country.value})
  })
  .then(states => {
    for (var i = 0; i < states.geonames.length; i++) {
      var option = document.createElement('option');
      option.value = states.geonames[i].geonameId;
      option.textContent = states.geonames[i].name;
      state.appendChild(option);
    }
  })
  .catch(err => {
    console.log(err)
  });

  this.setState({isStatesSet: true});
}


selectorDrop(event) {
  event.target.className = "selector";

  switch (event.target.id) {
    case 'Country':
    {
      if (this.state.isCountriesSet == false) {
        this.setCountrySelectorOptions();
      }
      break;
    }
    case 'State':
    {
      if (this.state.isStatesSet == false) {
        this.setStateSelectorOptions();
      }
      break;
    }
    case 'Region':
    {

      break;
    }
    case 'City':
    {
      this.setStateSelectorOptions();
      break;
    }
    case 'Park':
    {

      break;
    }
  }
}

searchButtonClick(event) {
  var country = document.getElementById('Country');
  var city = document.getElementById('City');
  var park = document.getElementById('Park');

console.log(country[country.selectedIndex].value + ", " + city[city.selectedIndex].value + ", " + park[park.selectedIndex].value);

  var map = document.getElementById('map');

  map.src = "https://maps.google.com/maps?q="+ country[country.selectedIndex].value + ",+" + city[city.selectedIndex].value + ",+" + park[park.selectedIndex].value + "&output=embed";

  console.log(map.src);
}

render() {
  return (
    <div className="row">
      <div className="container mt-5" >
          <div className="row">
            <div className="col-md-6 maps">
            <iframe id="map" width="100%" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
            src="https://maps.google.com/?q=dog+park&output=embed"
            style={{border:0}} allowFullScreen></iframe>
            </div>
            <div className="col-md-6">
              <h2 className="text-uppercase mt-3 font-weight-bold text-white">Find Park:</h2>

              <select id="Country" className="selector text-muted" onClick={this.selectorDrop}>
                <option value="">-- Country --</option>
              </select>

              <br/>
              <br/>

              <select id="State" className="selector text-muted" onClick={this.selectorDrop}>
                <option value="">-- State --</option>
              </select>

              <br/>
              <br/>

              <select id="Region" className="selector text-muted" onClick={this.selectorDrop}>
                <option value="">-- Region --</option>
              </select>

              <br/>
              <br/>

              <select id="City" className="selector text-muted" onClick={this.selectorDrop}>
                <option value="">-- City --</option>
              </select>

              <br/>
              <br/>

              <select id="Park" className="selector text-muted" onClick={this.selectorDrop}>
                <option value="">-- Park --</option>
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
export default Map0;
