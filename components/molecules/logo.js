import styles from '../../styles/Header.module.css'

function Logo() {
    return (
      <div className="col-span-3">
          <h1 className={styles.logo}>Pokedéx</h1>
          <p className={styles.flavourText}>Search for Pokémon by name or using the National Pokédex number</p>
      </div>
    )
}

export default Logo;