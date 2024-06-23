import CharacterCard from "./CharacterCard";
import TitleSection from "./TitleSection";
// import { Pagination, Spinner } from "flowbite-react";
import { Pagination } from "flowbite-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CharacterList({
  characters = [],
  page = 1,
  totalPages = 1,
  onPageChange,
}) {
  return (
    <>
      <div className="grid grid-cols-1">
        {/* Characters Title  */}
        <TitleSection title="Characters" />

        {/* Characters List  */}
        <div className="grid grid-cols-4 gap-4 my-4">
          {/* Spinner */}
          {/* {loading && (
            <div className="flex flex-wrap items-center justify-center col-span-4">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          )} */}
          {/* Card */}
          {characters.length !== 0 &&
            characters.map((item) => (
              <Link to={`/characters/${item.id}`} key={item.id}>
                <CharacterCard
                  name={item.name}
                  image={item.image}
                  status={item.status}
                  species={item.species}
                  location={item.location}
                />
              </Link>
            ))}
          {characters.length > 8 && (
            <div className="flex justify-center items-center col-span-4">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
