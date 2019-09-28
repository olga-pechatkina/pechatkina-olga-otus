import React, { Component } from 'react'; 

import logo from './logo.svg'; 
import './App.css'; 
class WeatherDisplay extends Component { 
    constructor() { 
    super(); 
    this.state = { 
    weatherData: null 
    }; 
    } 
    toggleFavorite(){ 
    this.props.onFavoriteToggle(this.props.digit); 
    } 
    componentWillReceiveProps(props) { 
    var weather = {}; 
    if (props.place == "Санкт-Петербург") 
    { 
    weather = { 
    "temperature" : "-3", 
    "forecast" : "no sun" 
    } 
    } 
    else if (props.place == "Москва") 
    { 
    weather = { 
    "temperature" : "-3", 
    "forecast" : "fog" 
    } 
    } 
    else if (props.place == "Валенсия") 
    { 
    weather = { 
    "temperature" : "8", 
    "forecast" : "sunny" 
    } 
    } 
    else if (props.place == "Рим") 
    { 
    weather = { 
    "temperature" : "9", 
    "forecast" : "rain" 
    } 
    } 
    this.setState({ weatherData: weather }); 
    }; 
    render() { 
    var heartClassName = "star-empty"; 
    if(this.props.favorite){ 
    heartClassName = "star-full"; 
    } 
    const weatherData = this.state.weatherData; 
    if (!weatherData) return <div>Loading</div>; 
    return ( 
    <div> 
    <span className={heartClassName} onClick={() => this.toggleFavorite()} aria-hidden="true"></span> 
    <h1>Displaying weather for city {this.props.place} </h1> 
    <h3>The temperature is {weatherData.temperature}</h3> 
    <h3>The forecast is {weatherData.forecast}</h3> 
    </div> 
    ); 
    } 
    } 
    export {WeatherDisplay};