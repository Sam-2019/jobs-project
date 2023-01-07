import { useLoaderData } from "react-router-dom";
import Art from "../pages/art";
import { userData } from "../utils/data";

export async function loader() {
  return { userData };
}

export default function ArtRoute() {
  const { userData }: any = useLoaderData();
  return Art(userData);
}
