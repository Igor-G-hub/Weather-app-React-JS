import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayWeather from './components/DisplayWeather.jsx'
import Navbar from './components/Navbar';
import './components/quino-al-mBQIfKlvowM-unsplash.jpg'

class App extends Component {
  state = {
    coords: {
      latitude: 45,
      longitude: 60
    },
    data: {},     
    inputData: "",
    errorMessage: ""
  }

  componentDidMount() {
    if(navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition((position) => {
      let newCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }

    this.setState({coords: newCoords});
    
    Axios.get(`http://api.weatherstack.com/current?access_key=c28e3d91eb7be9848ed171c5e7eb65a6&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
      
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons
      }
      
      this.setState({data: weatherData});

    })

      });

    } else {
      alert("Please enable Your network location for further processing.");
    }
  }

  handleOnChange = (value) => {    
    this.setState({inputData: value});
   
    if (value == "") {
      this.setState({errorMessage: ""});
    }
  }

  handleError = () => {      
   this.setState({errorMessage: "Inserted location cannot be found..."});
   
  };

  handleChangeWeather = (event) => {
    event.preventDefault();
    
    if (this.state.inputData.length > 0) {      

    Axios.get(`http://api.weatherstack.com/current?access_key=c28e3d91eb7be9848ed171c5e7eb65a6&query=${this.state.inputData}`).then(res => {
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons
      }
      
      this.setState({data: weatherData});
      this.setState({errorMessage: ""});
     }).catch(
       error => this.handleError()
       ); 

  } 
      
      else {
        this.setState({errorMessage: "Please insert location name..."})
      };
    } 
   
  render() {
    return (  
      <div className="container-fluid">
        <div className="row">
          <Navbar onChange={this.handleOnChange} changeWeather={this.handleChangeWeather} onError={this.state.errorMessage}/> 
        </div>
        <div className="row w-80">                
          <DisplayWeather weatherData={this.state.data} />
        </div>
      </div> 
    );
  }
}
 
export default App;


