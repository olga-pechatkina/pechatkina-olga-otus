import React, { Component } from 'react'; 
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import takeWeatherCity from './takeWeatherCity.js'

class WeatherDisplay extends Component { 
    constructor(props) { 
        super(props); 
        this.state = {
            weatherData:{}
        }            
    } 

    componentDidUpdate(prevProps) {
        if(prevProps.place !== this.props.place){
            takeWeatherCity().then((weatherFromDB) =>{
                this.setState({ 
                    weatherData: weatherFromDB?weatherFromDB.find(item => item.city ===this.props.place):null
                });
            });   
        }
    }

    toggleFavorite(){ 
        this.props.onFavoriteToggle(this.props.digit); 
    }  

    render() { 
        const weatherData = this.state.weatherData; 
        if (!weatherData) return <div>Loading</div>; 
        return ( 
        <div> 
        <span onClick={() => this.toggleFavorite()} aria-hidden="true">
            {this.props.favorite
            ?<FontAwesomeIcon icon={faHeart} size="3x"/>
            :<FontAwesomeIcon icon={farHeart} size="3x"/>}
        </span> 
        <h1>Displaying weather for city {this.props.place} </h1> 
        <h3>The temperature is {weatherData.temperature}</h3> 
        <h3>The forecast is {weatherData.forecast}</h3> 
        </div> 
        ); 
    } 
} 
export {WeatherDisplay};