import { faCircleQuestion, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export default function StatusIcon({ status }) {
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
