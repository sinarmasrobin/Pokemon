import styles from '../styles/Header.module.css'

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

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  )
}
