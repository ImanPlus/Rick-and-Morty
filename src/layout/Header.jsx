import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import logo from "../assets/LogoA.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-16 container mx-auto">
      <img src={logo} alt="Rick&Morty-logo" />
      <Button
        className="text-white text-sm bg-cyan-500 flex items-center rounded-3xl py-0 px-0"
        size="md"
      >
        <span className="mr-1.5">
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <p className="font-normal">Favorites List</p>
      </Button>
    </header>
  );
}
