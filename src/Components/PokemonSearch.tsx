import React, { Component } from 'react';
import User from '../interfaces/User.interface';
import SearchState from '../interfaces/SearchState.interface';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid blue;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
`;

class PokemonSearch extends Component<User, SearchState> {
  constructor(props: User) {
    super(props);
    this.state = {
      name: '',
      numberOfAbilities: 0,
      baseExperience: 0,
      imgUrl: ''
    }
    this.pokemonRef = React.createRef();
  
  }

  pokemonRef: React.RefObject<HTMLInputElement>;

  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value;
  }

  // Error ts2531: Object is possibly null. (for this.pokemonRef.current.value)
  // Fix error: tsconfig.json - add "strictNullChecks": false

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