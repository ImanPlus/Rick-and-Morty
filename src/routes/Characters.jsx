import { Outlet, useLoaderData, useSearchParams } from "react-router-dom";
import { getAllCharacters } from "../api/character";
import CharacterList from "../components/CharacterList";

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const { data } = await getAllCharacters(page);
  return { characters: data.results, page, totalPages: data.info.pages };
}

export default function Characters() {
  const { characters, page, totalPages } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const onPageChange = (page) => {
    setSearchParams({ page });
  };
  return (
    <>
      <Outlet />
      <div className="container mx-auto">
        <CharacterList
          characters={characters}
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
