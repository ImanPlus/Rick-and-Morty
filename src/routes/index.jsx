import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../layout/ErrorPage";
import Characters from "./Characters";
import { loader as charactersLoader } from "./Characters";
import { loader as characterLoader } from "./Character";
import Character from "./Character";
import Episodes from "./Episodes";
import { loader as episodesLoader } from "../routes/Episodes";
import { loader as episodeLoader } from "../routes/Episode";
import Episode from "./Episode";
import Locations from "./Locations";
import { loader as locationsLoader } from "../routes/Locations";
import Location, { loader as locationLoader } from "../routes/Location";
import HomePage from "./HomePage";
import { loader as homePageLoader } from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader,
      },
      {
        path: "characters",
        element: <Characters />,
        loader: charactersLoader,
        children: [
          {
            path: ":characterId",
            element: <Character />,
            loader: characterLoader,
          },
        ],
      },
      {
        path: "episodes",
        element: <Episodes />,
        loader: episodesLoader,
        children: [
          {
            path: ":episodeId",
            element: <Episode />,
            loader: episodeLoader,
          },
        ],
      },
      {
        path: "locations",
        element: <Locations />,
        loader: locationsLoader,
        children: [
          {
            path: ":locationId",
            element: <Location />,
            loader: locationLoader,
          },
        ],
      },
    ],
  },
]);

export default router;
