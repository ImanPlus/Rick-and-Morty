import { Pagination } from "flowbite-react";
import EpisodeCard from "./EpisodeCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TitleSection from "./TitleSection";

export default function EpisodeList({
  episodes = [],
  page = 1,
  totalPages = 1,
  onPageChange,
}) {
  return (
    <div className="grid grid-cols-1">
      {/* Episodes Title  */}
      <TitleSection title="Episodes" />

      {/* Episodes List  */}
      <div className="grid grid-cols-5 gap-4 my-4">
        {/* Card */}
        {episodes.length !== 0 &&
          episodes.map((item) => (
            <Link to={`/episodes/${item.id}`} key={item.id}>
              <EpisodeCard
                key={item.id}
                name={item.name}
                episode={item.episode}
              />
            </Link>
          ))}
        {episodes.length > 5 && (
          <div className="flex justify-center items-center col-span-5">
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

EpisodeList.propTypes = {
  episodes: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};
