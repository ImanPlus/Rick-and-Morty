import { faCircleInfo, faHeart, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";

export default function EpisodeCard({ name, episode }) {
  return (
    <Card className="max-w-sm bg-stone-50 rounded-2xl h-full" padding="0">
      <div className="flex flex-col justify-between gap-6">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faTv} />
          <p>
            {name} | {episode}
          </p>
        </div>
        <div className="flex justify-between items-center ">
          <Button className="bg-cyan-500  hover:bg-cyan-300 rounded-3xl font-normal text-sm">
            <span className="pr-1.5">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <p> Saiba mais</p>
          </Button>
          <FontAwesomeIcon
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            size="2x"
            icon={faHeart}
          />
        </div>
      </div>
    </Card>
  );
}

EpisodeCard.propTypes = {
  name: PropTypes.string,
  episode: PropTypes.string,
};
