import Logo from "../molecules/logo";
import SearchBar from "../molecules/searchbar";

function Header() {
    return (
      <div className="grid grid-cols-5 gap-0 mt-5">
        <Logo />
        <SearchBar />
      </div>
    )
}

export default Header;