// pokemonTypes is in the form: 
//     object : {
//         type : {
//             [
//                 {name : String}
//             ]
//         }
//     }
function getPokemonTypes(pokemon) {
    return (
        pokemon.types.map((object) => {
            return object.type.name;
        })
    )
}

export default getPokemonTypes;
