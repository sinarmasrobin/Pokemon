function PokemonTypeBox({type, backgroundColor}) {
    return (
        <div className={"rounded-md shadow-md grow flex flex-initial p-1 " + backgroundColor}>
            <p className="text-white text-sm self-center grow shrink-0 w-min text-shadow-grey font-mono capitalize">{type}</p>
        </div>
    )
}

export default PokemonTypeBox;
