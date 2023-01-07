import { useLoaderData } from "react-router-dom";
import Home from "../pages/home";
import { userData } from "../utils/data";

export async function loader() {
  return { userData };
}

export default function HomeRoute() {
  const { userData }: any = useLoaderData();
  return Home(userData);
}
