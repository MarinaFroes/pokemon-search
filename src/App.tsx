import React, { Component } from 'react'
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PokemonSearch from './Components/PokemonSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PokemonSearch name="Marina" numberOfPokemons={5} />
        <Footer />
      </div>
    )
  }
}

export default App;