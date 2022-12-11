import { useRef } from 'react';

function SearchBar({dataFunction}) {
  const inputRef = useRef(null)

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        dataFunction(inputRef.current.value);
      }
  };

    return (
      <div className="w-full self-end">
          <input className="w-full px-3 py-1.5 border-2 rounded text-base font-normal text-gray-700"
            type="text"
            ref={inputRef}
            id="searchBar"
            name="searchBar"
            placeholder="Search by Pokedex # or Name"
            onKeyDown={handleKeyPress}
          />
      </div>
    )
}

export default SearchBar;
