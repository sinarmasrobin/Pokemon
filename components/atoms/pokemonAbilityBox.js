function PokemonAbilityBox({type, optText, backgroundColor}) {
    return (
        <div className={"rounded-md shadow-md grow flex w-auto flex-initial p-1 " + backgroundColor}>
            <p className="text-white text-sm text-center self-center grow shrink-0 w-max text-shadow-black font-mono capitalize">{optText ? optText : type}</p>
        </div>
    )
}

export default PokemonAbilityBox;
