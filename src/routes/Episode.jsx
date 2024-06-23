import { useLoaderData } from "react-router-dom";
import { getEpisode } from "../api/episodes";
import EpisodeSpotlight from "../components/EpisodeSpotlight";

export async function loader({ params }) {
  const { episodeId } = params;
  console.log("episodeId::", episodeId);
  const { data } = await getEpisode(episodeId);
  console.log("Data is::", { data });
  return { singleEpisode: data };
}

export default function Episode() {
  const { singleEpisode } = useLoaderData();
  const { name, air_date, episode, characters } = singleEpisode;
  return (
    <EpisodeSpotlight
      name={name}
      air_date={air_date}
      episode={episode}
      characters={characters}
    />
  );
}
