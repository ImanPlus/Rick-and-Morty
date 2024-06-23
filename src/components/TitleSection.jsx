import PropTypes from "prop-types";

export default function TitleSection({ title }) {
  return (
    <div className="title-section flex justify-start gap-4 mb-2 mt-7">
      <h2 className="font-bold text-2xl">{title}</h2>
      <button className="cursor-pointer ml-1.5 text-white bg-cyan-500 hover:bg-cyan-300 rounded-3xl p-1 text-sm flex items-center gap-1">
        <span>
          <img src="/img/SquaresFour.svg" alt="SquaresFour" />
        </span>
        See All
      </button>
    </div>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};
