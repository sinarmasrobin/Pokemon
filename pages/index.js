import styles from '../styles/Header.module.css'
import React, { useState, useEffect } from 'react'
import Pokemons from '../components/organisms/pokemons'
import Header from '../components/organisms/header'

function FetchPokemons(limit, page) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://pokeapi.co/api/v2/pokemon/' + '?limit=' + limit + '&offset=' + (limit * page))
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setLoading(false)
      console.log(data)
    })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No Pokemon data</p>

  return (
    <div>
      <h1>{data.results.map((pokemon) => {
        return (
          <p>{pokemon.name}, {pokemon.url}</p>
        )
      })}</h1>
    </div>
  )
}

function Home() {
  return (
    <div>
      <Header />
      <Pokemons 
        limit={20}
        offset={0}
      />
    </div>
  )
}

export default Home;
