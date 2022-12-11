import Logo from "../molecules/logo";
import SearchBar from "../molecules/searchbar";

function Header({dataFunction}) {
    return (
      <div className="flex flex-col my-5 md:flex-row gap-5">
        <Logo className="w-3/5" dataFunction={dataFunction} />
        <SearchBar className="w-2/5" dataFunction={dataFunction} />
      </div>
    )
}

export default Header;