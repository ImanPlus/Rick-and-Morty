import { useRouteError } from "react-router-dom";
import error404 from "../assets/404-computer.svg";

export default function ErrorPage() {
  const errorPage = useRouteError();
  const { status, statusText, data, message } = errorPage;

  console.log("error:::", errorPage);

  return (
    <div className="bg-blue-950 flex flex-col justify-center items-center h-screen">
      <div className="w-200 h-150">
        <img src={error404} alt="error 404" />
      </div>
      <h2 className="text-blue-700 font-bold text-4xl">
        {status ? `${status} ${statusText}` : message}
      </h2>
      <h1 className="text-5xl text-red-500">{data}</h1>
    </div>
  );
}
