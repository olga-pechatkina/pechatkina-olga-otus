import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  WeatherDisplay
} from './WeatherDisplay';
class App extends Component {
  constructor() {
    super();
    var favorites = [];
    if (localStorage.favorites) {
      favorites = JSON.parse(localStorage.favorites);
    }
    this.state = {
      activePlace: 0,
      favorites: favorites
    };
  }
  toggleFavorite(place) {
    if (this.isPlaceInFavorites(place)) {
      this.removeFromFavorites(place);
    } else {
      this.addToFavorites(place);
    }
  }
  addToFavorites(place) {

    var favorites = this.state.favorites;

    const favoritesNew = favorites.concat({
      place: place
    });

    this.setState({
      favorites: favoritesNew
    });

    localStorage.favorites = JSON.stringify(favorites);
  }

  removeFromFavorites(place) {

    var favorites = this.state.favorites;
    var index = -1;

    for (var i = 0; i < favorites.length; i++) {

      if (favorites[i].place == place) {
        index = i;
        break;
      }
    }

    // If it was found, remove it from the favorites array 

    if (index !== -1) {

      const favoritesNew = favorites.filter((item, j) => j !== index);

      this.setState({
        favorites: favoritesNew
      });

      localStorage.favorites = JSON.stringify(favorites);
    }
  }

  isPlaceInFavorites(place) {
    var favorites = this.state.favorites;
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].place == place) {
        return true;
      }
    }
    return false;
  }
  render() {
    const activePlace = this.state.activePlace;
    const favorite = this.isPlaceInFavorites(this.state.activePlace);
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
        PLACES.map((place, index) => ( <option key = {index} >
          {place} </option> 
        ))
      } </select>   <WeatherDisplay place = {
        PLACES[activePlace]
      }
      digit = {
        activePlace
      }
      favorite = {
        favorite
      }
      onFavoriteToggle = {
        place => this.toggleFavorite(place)
      }
      />  </div> 
    );
  }
}
const PLACES = [
  "Санкт-Петербург",
  "Москва",
  "Валенсия",
  "Рим"
];
export default App;