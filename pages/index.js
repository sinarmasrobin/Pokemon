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

function DisplayPokemons(pokemons) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {pokemons.map((pokemon) => {
        return (
          <div className="col-auto">
            <p>{pokemon.name}, {pokemon.url}</p>
          </div>
        )
      })}
    </div>
  )
}

function paginationHandler(page) {

}

export default function Home(props) {
  // function changePage(limit, page) {
  //   {content} = FetchPokemons(limit, limit * page);
  // }
  let content = FetchPokemons(20, 20)
  return (
    <div>
      <div>
        <Header />
      </div>
      <div id="content">
        {DisplayPokemons(props.pokemons)}
      </div>
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          activeClassName={'active'}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}

          initialPage={props.currentPage - 1}
          pageCount={props.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={paginationHandler}
      />
    </div>
  )
}

//Fetching posts in get Intial Props to make the app seo friendly
Home.getInitialProps = async ({ query }) => {
  const page = query.page || 1; //if page empty we request the first page
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');
  const pokemonsJson = await pokemons.json();
  const pokemonCount = await fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=0');
  const pokemonCountJson = await pokemonCount.json();
  console.log(pokemonsJson.results);
  console.log(pokemonCountJson.count);
  return {
      pokemons: pokemonsJson.results,
      pokemonCount: pokemonCountJson.count,
      currentPage: 1,
      pageCount: Math.floor(pokemonCount/20)
  };
}