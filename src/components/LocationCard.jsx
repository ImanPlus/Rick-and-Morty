import {
  faCircleInfo,
  faEarthAmericas,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";

export default function LocationCard({ name, type }) {
  return (
    <Card className="max-w-sm relative rounded-2xl h-full" padding="0">
      <div className="flex flex-col justify-between items-center text-center">
        <FontAwesomeIcon
          className="absolute top-[-20px]"
          size="2x"
          icon={faEarthAmericas}
        />
        <p>{type}</p>
        <p className="text-blue-500">{name}</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-4 ">
        <Button className="bg-cyan-500  hover:bg-cyan-300 rounded-3xl font-normal text-sm">
          <span className="pr-1.5">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
          <p>Know More</p>
        </Button>
        <FontAwesomeIcon
          className="text-cyan-500 hover:text-cyan-300 cursor-pointer"
          size="2x"
          icon={faHeart}
        />
      </div>
    </Card>
  );
}

LocationCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};
