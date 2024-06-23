import { useLoaderData } from "react-router-dom";
import { getSingleLocation } from "../api/location";
import LocationSpotlight from "../components/LocationSpotlight";

export async function loader({ params }) {
  const { locationId } = params;
  const { data } = await getSingleLocation(locationId);
  return { location: data };
}

export default function Location() {
  const { location } = useLoaderData();
  const { name, type, dimension, residents } = location;

  return (
    <LocationSpotlight
      name={name}
      type={type}
      dimension={dimension}
      residents={residents}
    />
  );
}
