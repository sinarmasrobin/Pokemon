function getPokemonBackground(pokemonMainType) {
    switch(pokemonMainType) {
        case "normal":
            return "bg-slate-300";
        case "fire":
            return "bg-orange-400";
        case "water":
            return "bg-blue-400";
        case "grass":
            return "bg-green-400";
        case "electric":
            return "bg-yellow-300";
        case "ice":
            return "bg-sky-200";
        case "fighting":
            return "bg-red-400";
        case "poison":
            return "bg-fuchsia-400";
        case "ground":
            return "bg-amber-400";
        case "flying":
            return "bg-violet-400";
        case "psychic":
            return "bg-pink-400";
        case "bug":
            return "bg-lime-400";
        case "rock":
            return "bg-amber-500";
        case "ghost":
            return "bg-purple-400";
        case "dark":
            return "bg-neutral-500";
        case "dragon":
            return "bg-violet-400";
        case "steel":
            return "bg-zinc-300";
        case "fairy":
            return "bg-pink-300";
    }
}

export default getPokemonBackground;
