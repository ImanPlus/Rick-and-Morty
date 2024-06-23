import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const url = `/search?q=${searchQuery}`;
    navigate(url);
  };

  return (
    <div className="grid grid-cols-2 my-12 ">
      <div className="tool-bar">
        <div className="w-96 flex items-center justify-end relative">
          <input
            className="w-full border-2 border-zinc-800 h-10 px-4 text-base focus:outline-none rounded-full"
            type="search"
            placeholder="Character, episode, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="absolute pr-4"
            type="submit"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </div>
      </div>

      <div className="filters flex justify-end items-center gap-2">
        <p>Filter by:</p>
        <button className="cursor-pointer ml-1.5 text-white bg-cyan-500 hover:bg-cyan-300 rounded-3xl p-1">
          <FontAwesomeIcon icon={faSmile} size="lg" className="pr-1.5" />
          Characters
        </button>
        <button className="cursor-pointer hover:bg-cyan-300 rounded-3xl p-1 flex items-center">
          <span className="pr-1.5">
            <img src="/img/Planet.svg" alt="Planet" />
          </span>
          Locations
        </button>
        <button className="cursor-pointer hover:bg-cyan-300 rounded-3xl p-1 flex items-center">
          <span className="pr-1.5">
            <img src="/img/Play.svg" alt="Play" />
          </span>
          Episodes
        </button>
      </div>
    </div>
  );
}
