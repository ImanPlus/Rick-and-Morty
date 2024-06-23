import TitleSection from "./TitleSection";
import { Pagination } from "flowbite-react";
import LocationCard from "./LocationCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function LocationList({
  locations = [],
  page = 1,
  totalPages = 1,
  onPageChange,
}) {
  return (
    <div className="grid grid-cols-1">
      {/* Location Title  */}
      <TitleSection title="Locations" />

      {/* Characters List  */}
      <div className="grid grid-cols-7 gap-7 my-8">
        {/* Card */}
        {locations.length !== 0 &&
          locations.map((item) => (
            <Link to={`/locations/${item.id}`} key={item.id}>
              <LocationCard key={item.id} name={item.name} type={item.type} />
            </Link>
          ))}
        {locations.length > 7 && (
          <div className="flex justify-center items-center col-span-7">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

LocationList.propTypes = {
  locations: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
