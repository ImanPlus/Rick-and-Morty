import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatusIcon from "./StatusIcon";
import GenderIcon from "./GenderIcon";
import { faSkull, faTv } from "@fortawesome/free-solid-svg-icons";
import LocationCard from "./LocationCard";

export default function CharacterSpotlight({
  status,
  image,
  name,
  episode,
  species,
  gender,
}) {
  return (
    <div className="w-full border-b border-b-sky-500 mb-12 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-[8fr_4fr]">
          <div className="flex gap-16">
            <div className="rounded-lg overflow-hidden w-80">
              <img src={image} alt={name} className="w-full" />
            </div>
            <div>
              <h5 className="text-5xl font-bold text-neutral-800 mb-8">
                {name}
              </h5>
              <div className="flex items-center gap-1 mb-12">
                <FontAwesomeIcon icon={faTv} />
                <p>
                  Participatie in{" "}
                  <span className="font-bold">{episode.length}</span> episodes
                </p>
              </div>
              <div className="inline-flex gap-6">
                <div className="inline-flex items-center gap-1">
                  <StatusIcon status={status} />
                  <p>{status}</p>
                </div>
                <div className="inline-flex items-center gap-1">
                  <FontAwesomeIcon icon={faSkull} />
                  <p>{species}</p>
                </div>
                <div className="inline-flex items-center gap-1">
                  <GenderIcon gender={gender} />
                  <p>{gender}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <LocationCard name="Planet" type="Earth (C-137)" />
            <LocationCard name="Planet" type="Citadel of Ricks" />
          </div>
        </div>
      </div>
    </div>
  );
}

CharacterSpotlight.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.object,
  origin: PropTypes.object,
  episode: PropTypes.array,
  species: PropTypes.string,
  gender: PropTypes.string,
};
