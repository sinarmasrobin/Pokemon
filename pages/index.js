import React, { useState, useEffect } from 'react'
import Pokemons from '../components/organisms/pokemons'
import Logo from "../components/molecules/logo";
import SearchBar from "../components/molecules/searchbar";

function Home() {
  console.log("ran once")
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [displayPokemons, setDisplayPokemons] = useState([]);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [statusMessage, setStatusMessage] = useState("Loading...")

  function searchNameOrNumber(data) {
    function hasNameOrNumber(pokemon) {
      return pokemon.id === parseInt(data) || pokemon.name === data
    }

    if (!data) {
      setDisplayPokemons(pokemons)
    }
    else {
      var result = pokemons.filter(hasNameOrNumber)
      if (!result || result.length == 0) {
        setDisplayPokemons([])
        setStatusMessage("Pokemon Not Found")
      }
      else {
        setDisplayPokemons(result)
      }
    }
  }

  useEffect(() => {
    var promises = []
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0')
      .then((response) => response.json())
      .then((data) => setTotalPokemonCount(data.count))
      .then(() => fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${totalPokemonCount}&offset=0`)
        .then((response) => response.json())
        .then((data) => {
            for (let pokemonData of data.results) {
                promises.push(fetch(pokemonData.url).then((response) => response.json()))
            }
        }))
      .then(() => Promise.all(promises))
      .then((result) => setPokemons(result))
      .then(() => setLoading(false))
    }, [loading]);

  useEffect(() => {
    setDisplayPokemons(pokemons)
  }, [pokemons])

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl grow w-auto my-8 mx-4">
        <div className="flex flex-col my-5 md:flex-row gap-5">
          <Logo className="w-3/5" dataFunction={searchNameOrNumber} />
          <SearchBar className="w-2/5" dataFunction={searchNameOrNumber} />
        </div>
        { loading || displayPokemons.length == 0 ? 
          <p>{statusMessage}</p> : 
          <Pokemons
            displayLimit={itemsPerPage}
            pokemons={displayPokemons}
          />
        }
      </div>
    </div>
  )
}

export default Home;
