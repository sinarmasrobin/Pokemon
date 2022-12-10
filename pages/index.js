import React, { useState, useEffect } from 'react'
import Pokemons from '../components/organisms/pokemons'
import Header from '../components/organisms/header'

function Home() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  useEffect(() => {
        var promises = []
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0')
          .then((response) => response.json())
          .then((data) => setTotalPokemonCount(data.count))
          .then(fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${totalPokemonCount}&offset=0`)
            .then((response) => response.json())
            .then((data) => {
                for (let pokemonData of data.results) {
                    promises.push(fetch(pokemonData.url).then((response) => response.json()))
                }
            })
            .then(() => Promise.all(promises))
            .then((result) => setPokemons(result)))
        .then(() => setLoading(false))
    }, [loading]);

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl grow w-auto my-8 mx-4">
        <Header />
        <Pokemons
          displayLimit={itemsPerPage}
          pokemons={pokemons}
        />
      </div>
    </div>
  )
}

export default Home;
