import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function HomePageSpotlight() {
  return (
    <div className="pt-16 border-b-2 border-cyan-500 grid grid-cols-2">
      <div className="left-side-header flex flex-col">
        <div className="content flex flex-col justify-center max-w-sm pb-14">
          <h1 className="font-bold text-5xl">
            Saiba tudo em um só <span className="text-cyan-500">lugar.</span>
          </h1>
          <p className="mt-6">Characters, Locations, Episodes and much more.</p>

          <div className="mode mt-32 text-sm flex items-center gap-2">
            <button className="cursor-pointer hover:bg-cyan-300 rounded-3xl p-1">
              <FontAwesomeIcon icon={faMoon} className="mr-1.5 fa-lg" />
              Escuro
            </button>
            <button className="cursor-pointer text-white bg-cyan-500 hover:bg-cyan-300 rounded-3xl p-1 flex items-center">
              <span className="mr-1.5">
                <img src="/img/Sun.svg" alt="Sun" />
              </span>
              <span>Claro</span>
            </button>
          </div>

          <p className="mt-6 text-cyan-500">
            Wubba Lubba Dub Dub! Cuidado com os olhos.
          </p>
        </div>
      </div>

      <div className="right-side-header flex flex-col justify-between items-end">
        <div className="h-full">
          <img
            className="h-full"
            src="/img/rickMortyImage.svg"
            alt="rick & morty image"
          />
        </div>
      </div>
    </div>
  );
}
