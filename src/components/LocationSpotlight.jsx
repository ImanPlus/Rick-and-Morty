import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faCube, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function LocationSpotlight({
  name,
  type,
  dimension,
  residents,
}) {
  return (
    <div className="border-b border-cyan-500 mb-12 pb-16">
      <div className="container mx-auto flex flex-col items-start gap-5">
        <FontAwesomeIcon icon={faEarthAmericas} size="3x" />
        <h1 className="text-5xl font-bold">{name}</h1>
        <div className="flex gap-6 text-2xl">
          <div className="flex gap-1 items-center">
            <span>
              <FontAwesomeIcon icon={faEarthAmericas} />
            </span>
            <p>{type}</p>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FontAwesomeIcon icon={faCube} />
            </span>
            <p>{dimension}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faFaceSmile} />
          <h2 className="text-2xl">
            {residents.length} Characters located here
          </h2>
        </div>
      </div>
    </div>
  );
}

LocationSpotlight.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  dimension: PropTypes.string,
  residents: PropTypes.array,
};
