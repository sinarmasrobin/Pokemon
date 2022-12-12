import { useState } from "react";
import TypeBox from "../molecules/typebox";
import PokemonModal from "../molecules/pokemonmodal";
import React from "react";
import Image from "next/image";
import getPokemonTypes from "../../functions/getPokemonTypes";
import EmptyImage from "../../assets/empty.png";

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

// e.g. typesArray = ["fire", "dragon"]
function getTypeBoxes(typesArray) {
    return (
        <div className="flex flex-initial flex-row w-min space-x-2">
            {typesArray.map((type) => {
                return (
                    <TypeBox key={typesArray.indexOf(type)} type={type} />
                )
            })}
        </div>
    )
}

function PokemonGrid({pokemonArray}) {
    let [popupState, setPopupState] = useState(false);
    let [pokemonData, setPokemonData] = useState(null);

    const handleOnClose = () => setPopupState(false);

    return (
        <div className="z-0">
            {popupState ? <PokemonModal onClose={handleOnClose} pokemon={pokemonData} visible={true} /> : null}
            <div className="grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {pokemonArray.map((pokemon) => {
                let pokemonTypes = getPokemonTypes(pokemon)
                return (
                    <button key={pokemon.id}
                    className={`text-white font-bold rounded-2xl p-4 flex w-full h-min pokemon-card hover:brightness-110 ${getPokemonBackground(pokemonTypes[0])} `}
                    onClick={() => {
                        setPopupState(true), setPokemonData(pokemon)}}>
                            <div className="shrink-0 grow flex justify-start flex-col w-24 h-min">
                                    <p className="text-left text-base font-semibold text-gray-700 font-sans">#{pokemon.id}</p>
                                    <p className="text-left text-3xl font-bold text-white grow truncate text-shadow-grey font-sans capitalize">{pokemon.name}</p>
                                    <div className="justify-start mt-2">
                                        {getTypeBoxes(pokemonTypes)}
                                    </div>
                            </div>
                            <Image alt={`Image of ${pokemon.name}`} src={pokemon.sprites.front_default ? pokemon.sprites.front_default : EmptyImage} width={96} height={96} className="w-24 h-24 flex-initial shrink-0 justify-self-end self-center" />
                    </button>
                )
            })}
            </div>
        </div>
    )
}

export default PokemonGrid;
