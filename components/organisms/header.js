import Logo from "../molecules/logo";
import SearchBar from "../molecules/searchbar";

function Header() {
    return (
      <div className="flex flex-col mt-5 md:flex-row">
        <Logo className="w-3/5" />
        <SearchBar className="w-2/5" />
      </div>
    )
}

export default Header;