import { faPerson, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function SpeciesIcon({ species }) {
  const icon = species === "Human" ? faPerson : faRobot;
  return <FontAwesomeIcon icon={icon} />;
}
SpeciesIcon.propTypes = {
  species: PropTypes.string,
};
