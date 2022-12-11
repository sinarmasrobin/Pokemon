function Logo({dataFunction}) {
  const onClickHandler = (event) => {
    dataFunction("");
};

    return (
      <div className="w-full">
          <h1 className="text-5xl mb-2 hover:cursor-pointer w-min" onClick={onClickHandler}>Pokedéx</h1>
          <p className="text-sm text-neutral-500">Search for Pokémon by using the name or their National Pokédex number</p>
      </div>
    )
}

export default Logo;
