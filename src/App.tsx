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
        <PokemonSearch userName="Marina" numberOfPokemons={5} />
        <Footer />
      </div>
    )
  }
}

export default App;