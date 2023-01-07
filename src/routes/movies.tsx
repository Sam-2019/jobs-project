import { useLoaderData } from "react-router-dom";
import Movies from "../pages/movies";
import { userData } from "../utils/data";

export async function loader() {
  return { userData };
}

export default function MoviesRoute() {
  const { userData }: any = useLoaderData();
  return Movies(userData);
}
