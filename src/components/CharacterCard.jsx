import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faMoon } from "@fortawesome/free-regular-svg-icons";
import {
  faPerson,
  faRobot,
  faSkull,
  faEarthAmericas,
  faHeart,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "flowbite-react";
import PropTypes from "prop-types";

function StatusIcon({ status }) {
  let icon = null;
  let classes = "";

  switch (status) {
    case "Dead":
      icon = faSkull;
      classes = "text-red-600";
      break;
    case "Alive":
      icon = faMoon;
      classes = "text-green-600";
      break;
    default:
      icon = faCircleQuestion;
      classes = "text-yellow-600";
      break;
  }

  return <FontAwesomeIcon className={classes} icon={icon} />;
}

StatusIcon.propTypes = {
  status: PropTypes.string,
};

function SpeciesIcon({ species }) {
  const icon = species === "Human" ? faPerson : faRobot;
  return <FontAwesomeIcon icon={icon} />;
}

SpeciesIcon.propTypes = {
  species: PropTypes.string,
};

export default function CharacterCard({
  name,
  image,
  status,
  species,
  location,
}) {
  return (
    <Card
      className="max-w-sm bg-stone-50 justify-start"
      renderImage={() => (
        <img src={image} alt={name} className="m-4 rounded-lg" />
      )}
    >
      <h5 className="font-bold text-base">{name}</h5>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-start gap-2">
          <div className="flex items-center gap-1">
            <StatusIcon status={status} />
            <p>{status}</p>
          </div>
          <div className="flex items-center gap-1">
            <SpeciesIcon species={species} />
            <p>{species}</p>
          </div>
          <div className="flex items-center  gap-1">
            <FontAwesomeIcon icon={faEarthAmericas} />
            <p>{location.name}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end min-h-44">
          <FontAwesomeIcon
            className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
            size="3x"
            icon={faHeart}
          />

          <Button className="bg-cyan-500  hover:bg-cyan-300 rounded-3xl font-normal text-sm">
            <span className="pr-1.5">
              <FontAwesomeIcon icon={faCircleInfo} />
            </span>
            <p>Know More</p>
          </Button>
        </div>
      </div>
    </Card>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.object,
  gender: PropTypes.string,
};
