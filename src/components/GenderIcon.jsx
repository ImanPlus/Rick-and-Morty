import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMale,
  faFemale,
  faGenderless,
} from "@fortawesome/free-solid-svg-icons";

export default function GenderIcon({ gender }) {
  let icon = null;
  switch (gender) {
    case "Male":
      icon = faMale;
      break;
    case "Female":
      icon = faFemale;
      break;
    case "unknown":
    default:
      icon = faGenderless;
      break;
  }

  return <FontAwesomeIcon icon={icon} />;
}

GenderIcon.propTypes = {
  gender: PropTypes.string,
};
