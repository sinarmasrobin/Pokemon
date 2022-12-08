import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import parse from "html-react-parser";
import TypeBox from "../molecules/typebox";
import PokemonModal from "../molecules/pokemonmodal";

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

function getTypeBackground(pokemonMainType) {
    switch(pokemonMainType) {
        case "normal":
            return "bg-zinc-400";
        case "fire":
            return "bg-orange-500";
        case "water":
            return "bg-blue-600";
        case "grass":
            return "bg-green-500";
        case "electric":
            return "bg-yellow-400";
        case "ice":
            return "bg-cyan-400";
        case "fighting":
            return "bg-red-500";
        case "poison":
            return "bg-purple-500";
        case "ground":
            return "bg-orange-400";
        case "flying":
            return "bg-violet-400";
        case "psychic":
            return "bg-pink-500";
        case "bug":
            return "bg-lime-500";
        case "rock":
            return "bg-orange-500";
        case "ghost":
            return "bg-purple-600";
        case "dark":
            return "bg-gray-700";
        case "dragon":
            return "bg-violet-600";
        case "steel":
            return "bg-zinc-600";
        case "fairy":
            return "bg-pink-400";
    }
}

function displayPokemonGrid(pokemonArray) {
    const [popupState, setPopupState] = useState(false);
    const [pokemonData, setPokemonData] = useState(null);

    const handleOnClose = () => setPopupState(false);

    // console.log(pokemonArray)
    return (
        <div className="z-0">
            {popupState ? <PokemonModal onClose={handleOnClose} visible={popupState} pokemon={pokemonData} /> : null}
            <div className="grid grid-cols-1 gap-4 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* <PokemonModal /> */}
            {pokemonArray.map((pokemon) => {
                // console.log(pokemon.types)
                // let types = [pokemon.types.map((type) => {return type.name})]
                // console.log(pokemon.name + ', types=' + types)
                // let types = [pokemon.types.map((object) => {console.log(object.type.name)})]
                let statsHTML = pokemon.stats.map((object) => {return '<p>' + [object.stat.name, object.base_stat].join(': ') + '</p>'}).join('')
                let pokemonTypes = getTypes(pokemon.types)
                // console.log(pokemonTypes)
                return (
                    <button key={pokemon.id}
                    disabled={popupState}
                    className={"text-white font-bold rounded-2xl p-4 flex w-full h-min pokemon-card hover:brightness-110 " + getTypeBackground(pokemonTypes[0])}
                    onClick={() => {setPopupState(true), setPokemonData(pokemon)}}>
                        {/* <div className="m-1 grid shrink-0 grow flex-auto w-auto"> */}
                            <div className="shrink-0 grow flex justify-start flex-col w-24 h-min">
                                {/* <div className="flex justify-start flex-col"> */}
                                    {/* <p>#{pokemon.id} {pokemon.name}, {pokemon.types.map((object) => object.type.name).join(' ')}</p> */}
                                    <p className="text-left text-base font-semibold text-gray-700 font-sans">#{pokemon.id}</p>
                                    <p className="text-left text-3xl font-bold text-white grow truncate text-shadow-grey font-sans capitalize">{pokemon.name}</p>
                                    <div className="justify-start mt-2">
                                        {getTypeBoxes(pokemonTypes)}
                                        {/* {displayTypeBoxes(pokemon.types)} */}
                                        {/* {pokemon.types.map((object) => {
                                        return object.type.name
                                        })} */}
                                    </div>
                                    {/* {parse(statsHTML)} */}
                                {/* </div> */}
                            </div>
                            {/* <p>{pokemon.stats.map((object) => {return [object.stat.name, object.base_stat].join(': ')}).join('\r\n')}</p> */}
                            <img src={pokemon.sprites.front_default} className="w-24 h-24 flex-initial shrink-0 justify-self-end self-center" />
                                {/* <img src={pokemon.sprites.front_default}/> */}
                            {/* </div> */}
                        {/* </div> */}
                    </button>
                )
            })}
            </div>
        </div>
    )
}

function Pokemons({limit, offset}) {
    const [loadStatus, setLoadStatus] = useState(false);
    const [pokemonArray, setPokemonArray] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(offset);
    const [itemsPerPage, setItemsPerPage] = useState(limit);
    
    useEffect(() => {
        setLoadStatus(true)
        var promises = []
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + itemsPerPage + '&offset=' + itemOffset)
            .then((response) => response.json())
            .then((data) => {
                for (let pokemonData of data.results) {
                    promises.push(fetch(pokemonData.url).then((response) => response.json()))
                    // fetch(pokemonData.url)
                    //     .then((response) => response.json())
                    //     .then((pokemonDetail) => {
                    //         copyArr.push(pokemonDetail);
                    //     });
                }
            })
            .then(() => Promise.all(promises)
                // .then((response) => response.json())
                .then((result) => setPokemonArray(result)))
                // .then(console.log(pokemonArray)))
            // .then(() => Promise.all(pokemonArray.map(getPokemonData)).then((result) => console.log(result)))
            // .then(() => setPokemonArray(copyArr))
            // .then(() => console.log(copyArr))
            // .then(() => setLoadStatus(true))
            .then(fetch('https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0')
                .then((response) => response.json())
                .then((data) => setPageCount(Math.ceil(data.count / itemsPerPage))))
            .then(() => setLoadStatus(false))
    }, [itemsPerPage, itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage)
        // console.log('Page number=' + event.selected + ' offset=' + newOffset)
        setItemOffset(newOffset)
    }

    if (pokemonArray) {
        return (
            <div className="flex flex-col">
                {displayPokemonGrid(pokemonArray)}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination shrink"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>
        );
    }
    else {
        return ( 
            <div>
                {/* {DisplaySkeletonGrid} */}
                <h2>Loading...</h2>
            </div>
        )
    }
}

export default Pokemons;
