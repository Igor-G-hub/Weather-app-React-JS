import React, { Component } from 'react';

class DisplayWeather extends Component {

    render() {     

        const {location, temperature, description, region, country, 
              wind_speed, pressure, precip, humidity, img} = this.props.weatherData;
               
         return ( 
        <div className="container wrapper-content p-1">
            <div className="first-row row p-5">
                <div className="first-item col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <h1>{temperature}<sup> o</sup>C , Sunny</h1>
                    <h4>{location}</h4>
                    <p>{region}, {country}</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 pt-3 col-xl-8">
                    <img src={img} alt="weather-img" />
                </div>
            </div>

            <div className="row p-4">
                
                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                    <p><b>Wind Speed</b> (km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                    <p><b>Preassure</b> (millibar)</p>
                    <h2>{pressure}</h2>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                    <p><b>Precipitation</b> (mm)</p>
                    <h2>{precip}</h2>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                    <p><b>Humidity</b> (%)</p>
                    <h2>{humidity}</h2>
                </div>
               
              </div>
        </div>
    
       );
    }
}
 
export default DisplayWeather;