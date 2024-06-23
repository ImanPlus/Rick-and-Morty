import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/LogoA.svg";
import { faArrowCircleUp, faCode } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="container mx-auto flex flex-col justify-between pt-6 mb-6 gap-20">
      <div className="flex justify-between">
        <img src={logo} alt="Rick&Morty-logo" width={164} height={48} />
        <p className="cursor-pointer hover:text-gray-500">
          Back to the top
          <FontAwesomeIcon icon={faArrowCircleUp} className="ml-1.5" />
        </p>
      </div>

      <div className="flex justify-between border-t border-t-blue-500 pt-5">
        <div className="inline-flex gap-2 items-center text-sm">
          <FontAwesomeIcon icon={faCopyright} />
          <p>2024</p>
        </div>
        <div className="inline-flex gap-2 items-center text-sm text-neutral-700">
          <FontAwesomeIcon icon={faCode} className="text-sky-500" />
          <p>
            Developed By You! <span className="text-sky-500">Iman Jalali</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
