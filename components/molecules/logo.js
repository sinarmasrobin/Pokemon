import styles from '../../styles/Header.module.css'

function Logo() {
    return (
      <div>
          <h1 className={"m-0  "+ styles.logo}>Pokedéx</h1>
          <p className={styles.flavourText}>Search for Pokémon by using the name or their National Pokédex number</p>
      </div>
    )
}

export default Logo;
