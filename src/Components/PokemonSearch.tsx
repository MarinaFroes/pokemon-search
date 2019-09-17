import React, { Component } from 'react';
import User from '../interfaces/User.interface';
import styled from 'styled-components';

const Button = styled.button`

`;

class PokemonSearch extends Component<User> {

  pokemonRef = () => {

  }

  onSearchClick = () => {

  }

  render() {
    const { name, numberOfPokemons } = this.props;
    return (
      <div>
        <p>User {name} {numberOfPokemons ? <span>has {numberOfPokemons} pokemons</span> : <span>has no Pokemons</span>}.</p>
        <input type="text" ref={this.pokemonRef} placeholder="Pokemon name..."/>
        <Button onClick={this.onSearchClick}>Search</Button>
      </div>
    )
  }
}

export default PokemonSearch;