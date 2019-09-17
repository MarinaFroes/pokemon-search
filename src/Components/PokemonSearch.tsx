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
      error: false,
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
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then(res => {
        if (res.status !== 200) {
          this.setState({
            error: true
          });
          return;
        } 
        res.json().then(data => {
          this.setState({
            error: false,
            name: data.name,
            numberOfAbilities: data.abilities.length,
            baseExperience: data.base_experience,
            imgUrl: data.sprites.front_default
          })
        })
      })
  }

  // Error ts2531: Object is possibly null. (for this.pokemonRef.current.value)
  // Fix error: tsconfig.json - add "strictNullChecks": false

  render() {
    const { userName, numberOfPokemons } = this.props;
    const { error, name, numberOfAbilities, baseExperience, imgUrl } = this.state;

    let resultMarkup;

    if (error) {
      resultMarkup = <p>Pokemon not found, try again.</p>;
    } else {
      resultMarkup = (
        <div>
          <img src={imgUrl} alt={`Picture of ${name}`} />
          <p>{name} has {numberOfAbilities} abilities and {baseExperience} base experience points.</p>
        </div>
      )
    }

    return (
      <div>
        <p>User {userName} {numberOfPokemons ? <span>has {numberOfPokemons} pokemons</span> : <span>has no Pokemons</span>}.</p>
        <input type="text" ref={this.pokemonRef} placeholder="Pokemon name..."/>
        <Button onClick={this.onSearchClick}>Search</Button>
      </div>
    )
  }
}

export default PokemonSearch;