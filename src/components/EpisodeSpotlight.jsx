import {
  faCalendar,
  faFaceSmile,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function EpisodeSpotlight({
  name,
  air_date,
  episode,
  characters,
}) {
  return (
    <div className="border-b border-cyan-500 mb-12 pb-16">
      <div className="container mx-auto flex flex-col items-start gap-5">
        <FontAwesomeIcon icon={faTv} size="3x" />

        <div className="flex items-center gap-4">
          <h1 className="text-5xl font-bold">{name}</h1>
          <FontAwesomeIcon icon={faHeart} size="3x" className="text-cyan-500" />
        </div>

        <div className="flex gap-6 text-2xl">
          <div className="flex gap-1 items-center">
            <span>
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            <p>{air_date}</p>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
            <p>{episode}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faFaceSmile} />
          <h2 className="text-2xl">
            {characters.length} Characters participated in this episode
          </h2>
        </div>
      </div>
    </div>
  );
}

EpisodeSpotlight.propTypes = {
  name: PropTypes.string,
  air_date: PropTypes.string,
  episode: PropTypes.string,
  characters: PropTypes.array,
};
