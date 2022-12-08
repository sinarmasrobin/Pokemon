import PokemonTypeBox from "../atoms/pokemonTypeBox.js";
import PokemonAbilityBox from "../atoms/pokemonAbilityBox.js";

function TypeBox({type, optText}) {
    // console.log(type, optText)
    switch(type) {
        case "normal":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-zinc-300"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-zinc-300"} />)
        case "fire":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-orange-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-orange-500"} />)
        case "water":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-blue-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-blue-500"} />)
        case "grass":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-green-400"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-green-400"} />)
        case "electric":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-amber-200"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-amber-200"} />)
        case "ice":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-sky-100"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-sky-100"} />)
        case "fighting":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-red-600"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-red-600"} />)
        case "poison":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-purple-700"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-purple-700"} />)
        case "ground":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-orange-100"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-orange-100"} />)
        case "flying":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-blue-200"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-blue-200"} />)
        case "psychic":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-pink-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-pink-500"} />)
        case "bug":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-lime-400"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-lime-400"} />)
        case "rock":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-orange-600"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-orange-600"} />)
        case "ghost":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-purple-800"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-purple-800"} />)
        case "dark":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-stone-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-stone-500"} />)
        case "dragon":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-purple-600"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-purple-600"} />)
        case "steel":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-zinc-300"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-zinc-300"} />)
        case "fairy":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-pink-300"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-pink-300"} />)
    }
}

export default TypeBox;
