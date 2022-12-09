import PokemonTypeBox from "../atoms/pokemonTypeBox.js";
import PokemonAbilityBox from "../atoms/pokemonAbilityBox.js";

function TypeBox({type, optText}) {
    // console.log(type, optText)
    switch(type) {
        case "normal":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-slate-400"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-slate-400"} />)
        case "fire":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-orange-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-orange-500"} />)
        case "water":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-blue-600"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-blue-600"} />)
        case "grass":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-green-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-green-500"} />)
        case "electric":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-amber-400"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-amber-400"} />)
        case "ice":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-cyan-300"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-cyan-300"} />)
        case "fighting":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-red-600"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-red-600"} />)
        case "poison":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-fuchsia-700"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-fuchsia-700"} />)
        case "ground":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-amber-600"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-amber-600"} />)
        case "flying":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-blue-200"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-blue-200"} />)
        case "psychic":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-pink-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-pink-500"} />)
        case "bug":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-lime-500"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-lime-500"} />)
        case "rock":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-amber-700"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-amber-700"} />)
        case "ghost":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-purple-700"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-purple-700"} />)
        case "dark":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-neutral-700"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-neutral-700"} />)
        case "dragon":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-violet-600"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-violet-600"} />)
        case "steel":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-zinc-400"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-zinc-400"} />)
        case "fairy":
            return ( optText === undefined ? <PokemonTypeBox type={type} backgroundColor={"bg-pink-400"} />
                : <PokemonAbilityBox type={type} optText={optText} backgroundColor={"bg-pink-400"} />)
    }
}

export default TypeBox;
