import { useLoaderData } from "react-router-dom";
import { getSingleCharacter } from "../api/character";
import CharacterSpotlight from "../components/CharacterSpotlight";

export async function loader({ params }) {
  const { characterId } = params;
  const { data } = await getSingleCharacter(characterId);
  return { character: data };
}

export default function Character() {
  const { character } = useLoaderData();
  const { status, image, location, name, episode, species, gender, id } =
    character;

  return (
    <CharacterSpotlight
      id={id}
      status={status}
      name={name}
      image={image}
      location={location}
      episode={episode}
      species={species}
      gender={gender}
    />
  );
}
