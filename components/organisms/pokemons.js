import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function DisplayPokemonGrid(pokemonArray) {
    return (
      <div className="grid grid-cols-4 gap-2">
        {pokemonArray.map((pokemon) => {
          return (
            <div className="col-auto">
              <p>{pokemon.name}, {pokemon.url}</p>
            </div>
          )
        })}
      </div>
    )
}

function showPokemons(pokemonArray, pageCount) {
    console.log(pokemonArray)
    // console.log(props.pokemonArray)
    if (pokemonArray) {
        const handlePageClick = (event) => {
            props.limit = 20
            props.offet = 20
        };
    
        return (
            <div>
                {DisplayPokemonGrid(pokemonArray)}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        );
    }
}

function Pokemons({limit, offset}) {
    const [loadStatus, setLoadStatus] = useState(false);
    const [pokemonArray, setPokemonArray] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(offset);
    const [itemsPerPage, setItemsPerPage] = useState(limit);

    useEffect(() => {
        setLoadStatus(false);
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=' + itemsPerPage + '&offset=' + itemOffset)
        .then((response) => response.json())
        .then(
            (data) => setPokemonArray(data.results), setLoadStatus(true))
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0')
        .then((response) => response.json())
        .then((data) => setPageCount(Math.ceil(data.count / itemsPerPage)))

    }, [itemsPerPage, itemOffset, loadStatus]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage)
        console.log('Page number=' + event.selected + ' offset=' + newOffset)
        setItemOffset(newOffset)
    }

    if (loadStatus) {
        return (
            <div>
                {DisplayPokemonGrid(pokemonArray)}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
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
                <p>Loading...</p>
            </div>
        )
    }
}

export default Pokemons;
