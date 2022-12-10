import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import React from "react";
import PokemonGrid from "../molecules/pokemonGrid";

function Pokemons({pokemons, displayLimit}) {
    const [pokemonArray, setPokemonArray] = useState(pokemons);
    const [pageCount, setPageCount] = useState(Math.ceil(pokemons.length/displayLimit));
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(displayLimit);

    let pokemonsToDisplay = pokemonArray.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage)

    useEffect( () => {
        setPokemonArray(pokemons)
        setItemsPerPage(displayLimit)
        setCurrentPage(0)
        setPageCount(Math.ceil(pokemons.length/displayLimit))
    }, [pokemons, displayLimit])


    const handlePageClick = (event) => {
        pokemonsToDisplay = pokemonArray.slice(currentPage * itemsPerPage, (currentPage * itemsPerPage) + itemsPerPage)
        setCurrentPage(event.selected)
    }

    if (pokemonArray && pokemonArray.length) {
        return (
            <div className="flex flex-col">
                <PokemonGrid pokemonArray={pokemonsToDisplay} />
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
