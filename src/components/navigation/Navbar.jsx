/* eslint-disable react/prop-types */
import logo from "../../assets/assdi-logo.png";
import search from "../../assets/search.svg";

const Navbar = ({ searchText, onSearchAddText }) => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <img
            className="h-12"
            src={logo}
            alt="As Sunnah Skill Development Institute"
          />
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <form>
            <input
              className="outline-none border-none mr-2"
              type="search"
              name="search"
              placeholder="Search"
              value={searchText}
              onChange={(event) => onSearchAddText(event.target.value)}
            />
          </form>
          <img
            className="inline h-4 cursor-pointer"
            src={search}
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
