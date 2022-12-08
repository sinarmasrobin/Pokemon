import React from "react";
import TypeBox from "./typebox";
import StatMeter from "../atoms/pokemonStatMeter";
import Image from 'next/image';

// pokemonTypes is in the form: 
//     object : {
//         type : {
//             [
//                 {name : String}
//             ]
//         }
//     }
function getTypes(pokemonTypes) {
    // console.log(pokemonTypes)
    return (
        pokemonTypes.map((object) => {
            return object.type.name;
        })
    )
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

// e.g. typesArray = ["fire", "dragon"]
function getAbilityBoxes(abilities, type) {
    // console.log(abilities)
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
            let percent = Math.floor(parseInt(object.base_stat)*100/150).toString()
            // console.log(percent)
            return <StatMeter key={pokemon.stats.indexOf(object)} statName={object.stat.name} value={object.base_stat} percent={percent} />
        })
    )
}

function PokemonModal({onClose, visible, pokemon}) {
    console.log(pokemon)
    // console.log(getAbilities(pokemon))
    // console.log(onClose, visible, pokemon)
    let pokemonTypes = getTypes(pokemon.types)
    let pokemonAbilities = getAbilities(pokemon)
    const handleOnClose = (event) => {
        if (event.target.id === "background")
        {
            onClose();
        }
    }

    if (!visible) {
        return null;
    }

    return (
        <div id="background" onClick={handleOnClose} className="grow flex absolute justify-center items-center inset-0 bg-black bg-opacity-50 backdrop-blur-sm h-full w-full z-10">

            <div className="flex grow shrink-0 pokemon-details">
                <div className="w-1/2 bg-blue-300 flex items-center flex-col py-10 px-12 shrink-0 min-w-44 grow rounded-l-3xl">
                    <p className="text-white text-center text-shadow-black capitalize text-2xl font-extrabold">{pokemon.name}</p>
                    <Image src={pokemon.sprites.front_default} width={96} height={96} className="w-24 h-24 flex-none shrink-0" />
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
