import { Outlet, useLoaderData, useSearchParams } from "react-router-dom";
import EpisodeList from "../components/EpisodeList";
import { getAllEpisodes } from "../api/episodes";

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const { data } = await getAllEpisodes(page);
  return { episodes: data.results, page, totalPages: data.info.pages };
}

export default function Episodes() {
  const { episodes, page, totalPages } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const onPageChange = (page) => {
    setSearchParams({ page });
  };
  return (
    <>
      <Outlet />
      <div className="container mx-auto">
        <EpisodeList
          episodes={episodes}
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
