import React from "react";
import TypeBox from "./typebox";
import StatMeter from "../atoms/pokemonStatMeter";
import Image from 'next/image';
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

// e.g. typesArray = ["fire", "dragon"]
function getAbilityBoxes(abilities, type) {
    return (
        <div className="flex flex-initial flex-col w-full gap-2">
            {abilities.map((ability) => {
                return (
                    <TypeBox key={ability} optText={ability} type={type} />
                )
            })}
        </div>
    )
}

function getAbilities(pokemon) {
    return (
        pokemon.abilities.map((object) => {
            return object.ability.name
        })
    )
}

function getStatMeters(pokemon) {
    return (pokemon.stats.map((object) => {
            return <StatMeter key={pokemon.stats.indexOf(object)} statName={object.stat.name} value={object.base_stat} />
        })
    )
}

function PokemonModal({onClose, visible, pokemon}) {
    let pokemonTypes = getPokemonTypes(pokemon)
    let pokemonAbilities = getAbilities(pokemon)
    
    const handleOnClose = (event) => {
        if (event.target.id === "background")
        {
            document.body.style.overflow = 'auto';
            onClose();
        }
    }

    if (!visible) {
        return null;
    }

    document.body.style.overflow = 'hidden';

    return (
        <div id="background" onClick={handleOnClose} className="grow flex fixed justify-center items-center inset-0 bg-black bg-opacity-50 backdrop-blur-sm h-full w-full z-10">
            <div className="flex grow shrink-0 pokemon-details">
                <div className={`w-1/2  flex items-center flex-col py-10 px-12 shrink-0 min-w-44 grow rounded-l-3xl ${getPokemonBackground(pokemonTypes[0])}`}>
                    <p className="text-white text-center text-shadow-black capitalize text-2xl font-extrabold">{pokemon.name}</p>
                    <Image alt={`Image of ${pokemon.name}`} src={pokemon.sprites.front_default ? pokemon.sprites.front_default : EmptyImage} width={96} height={96} className="w-24 h-24 flex-none shrink-0" />
                    <p className="text-white text-center text-shadow-black mb-2 font-bold">Type</p>
                    {getTypeBoxes(pokemonTypes)}
                    <p className="text-white text-center text-shadow-black my-2 font-bold">Special abilities</p>
                    {getAbilityBoxes(pokemonAbilities, pokemonTypes[0])}
                </div>
                <div className="w-1/2 bg-zinc-200 flex justify-left items-start flex-col py-10 px-12 shrink-0 min-w-44 grow rounded-r-3xl">
                    <p className="text-green-500 font-mono capitalize text-2xl font-bold">Base Stats</p>
                    {getStatMeters(pokemon)}
                </div>
            </div>
        </div>
    )
}

export default PokemonModal;
