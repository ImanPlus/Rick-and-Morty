import { useLoaderData } from "react-router-dom";
import { getAllCharacters } from "../api/character";
import CharacterList from "../components/CharacterList";
import HomePageSpotlight from "../components/HomePageSpotlight";
import SearchBar from "../components/SearchBar";
import { getAllEpisodes } from "../api/episodes";
import EpisodeList from "../components/EpisodeList";
import { getAllLocations } from "../api/location";
import LocationList from "../components/LocationList";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get("q");
  console.log("url:", url, "searchQuery:", searchQuery);
  const { data: characters } = await getAllCharacters(searchQuery);
  const { data: episodes } = await getAllEpisodes();
  const { data: locations } = await getAllLocations();
  const limitCharacters = characters.results.slice(0, 8);
  const limitEpisodes = episodes.results.slice(0, 5);
  const limitLocations = locations.results.slice(0, 7);
  return {
    characters: limitCharacters,
    episodes: limitEpisodes,
    locations: limitLocations,
  };
}

export default function HomePage() {
  const { characters, episodes, locations } = useLoaderData();
  return (
    <div className="container mx-auto">
      <HomePageSpotlight />
      <SearchBar />
      <CharacterList characters={characters} />
      <EpisodeList episodes={episodes} />
      <LocationList locations={locations} />
    </div>
  );
}
