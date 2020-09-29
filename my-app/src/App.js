import React, {Component} from 'react';
import './App.css';
import {WeatherDisplay} from './WeatherDisplay';
import takeWeatherCity from './takeWeatherCity.js'

class App extends Component {
  constructor() {
    super();

    var favorites = [];
    favorites = localStorage.favorites ? JSON.parse(localStorage.favorites) : null;
    
    this.state = {
      activePlace: 0,
      cities: [],
      favorites: favorites
    };
  }

  componentDidMount(){
    takeWeatherCity().then((weatherFromDB) =>{
      this.setState({ 
        cities: weatherFromDB?weatherFromDB.map(item => item.city):[]
      });  
    });
  }

  toggleFavorite(place) {
    this.isPlaceInFavorites(place)? this.removeFromFavorites(place) : this.addToFavorites(place);
  }

  addToFavorites(place) {
    this.setState({
      favorites: this.state.favorites.concat({place})
    });

    localStorage.favorites = JSON.stringify(this.state.favorites);
  }

  removeFromFavorites(place) {
    this.setState({
      favorites: this.state.favorites.filter((item) => item.place !== place)
    });

    localStorage.favorites = JSON.stringify(this.state.favorites);
  }

  isPlaceInFavorites(place) {
    return (this.state.favorites.find ((item) =>item.place === place));
  }

  render() {
    const activePlace = this.state.activePlace;
    const isFavorite = this.isPlaceInFavorites(this.state.activePlace);

    return ( 
      <div className = "App" >
        <select onChange = {
          () => {
            this.setState({
              activePlace: document.getElementsByTagName('select')[0].selectedIndex
            });
          }
        } >
        {
          this.state.cities.map((place, index) => ( <option key = {index} >
            {place} </option> 
          ))
        } </select> 
        <WeatherDisplay place = {
          this.state.cities[activePlace]
        }
        digit = {
          activePlace
        }
        favorite = {
          isFavorite
        }
        onFavoriteToggle = {
          place => this.toggleFavorite(place)
        }
        />
      </div> 
    );
  } 
}
export default App;