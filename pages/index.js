import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

function Logo() {
  return (
    <div className="col-span-3">
        <h1 className={styles.logo}>Pokedéx</h1>
        <p className={styles.flavourText}>Search for Pokémon by name or using the National Pokédex number</p>
    </div>
  )
}

function SearchBar() {
  return (
    <div className="col-span-2 self-end">
        <h5>SearchBar</h5>
    </div>
  )
}

function Header() {
  return (
    <div className="grid grid-cols-5 gap-0 mt-5">
      <Logo />
      <SearchBar />
    </div>
  )
}

function Pokemons(limit, offset) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://pokeapi.co/api/v2/pokemon/' + '?limit=' + limit + '&offset=' + (offset-1))
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setLoading(false)
      console.log(data)
    })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

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

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {Pokemons(20,1)}
      </div>
    </div>
  )
}

Home.getInitialProps
