import { Outlet, useLoaderData, useSearchParams } from "react-router-dom";
import { getAllLocations } from "../api/location";
import LocationList from "../components/LocationList";

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")) || 1;
  const { data } = await getAllLocations(page);
  return { locations: data.results, page, totalPages: data.info.pages };
}

export default function Locations() {
  const { locations, page, totalPages } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const onPageChange = (page) => {
    setSearchParams({ page });
  };

  return (
    <>
      <Outlet />
      <div className="container mx-auto">
        <LocationList
          locations={locations}
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
