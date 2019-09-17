import React, { Component } from 'react';
import User from '../interfaces/User.interface';
import SearchState from '../interfaces/SearchState.interface';
import styled from 'styled-components';

const Main = styled.main`
  text-align: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  border: 1px solid blue;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
`;

const Image = styled.img`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin: 1rem;
`;

class PokemonSearch extends Component<User, SearchState> {
  constructor(props: User) {
    super(props);
    this.state = {
      error: false,
      pokemon: null
    }
    this.pokemonRef = React.createRef();
  
  }

  pokemonRef: React.RefObject<HTMLInputElement>;

  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then(res => {
        if (!inputValue || res.status !== 200) {
          this.setState({
            error: true
          });
          return;
        } 
        res.json().then(data => {
          this.setState({
            error: false,
            pokemon: {
              name: data.name,
              numberOfAbilities: data.abilities.length,
              baseExperience: data.base_experience,
              imgUrl: data.sprites.front_default
            }
          })
        })
      })
  }

  // Error ts2531: Object is possibly null. (for this.pokemonRef.current.value)
  // Fix error: tsconfig.json - add "strictNullChecks": false

  render() {
    const { userName, numberOfPokemons } = this.props;
    const { error, pokemon } = this.state;

    let resultMarkup;

    if (error) {
      resultMarkup = <p>Pokemon not found, try again.</p>;
    } else if(pokemon){
      resultMarkup = (
        <div>
          <Image src={pokemon.imgUrl} alt={`Picture of ${pokemon.name}`} />
          <p>{pokemon.name} has {pokemon.numberOfAbilities} abilities and {pokemon.baseExperience} base experience points.</p>
        </div>
      )
    }

    return (
      <Main>
        <p>User {userName} {numberOfPokemons ? <span>has {numberOfPokemons} pokemons</span> : <span>has no Pokemons</span>}.</p>
        <Input type="text" ref={this.pokemonRef} placeholder="Pokemon name..."/>
        <Button onClick={this.onSearchClick}>Search</Button>
        {resultMarkup}
      </Main>
    )
  }
}

export default PokemonSearch;