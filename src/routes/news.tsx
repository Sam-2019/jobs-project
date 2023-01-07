import { useLoaderData } from "react-router-dom";
import News from "../pages/news";
import { userData } from "../utils/data";

export async function loader() {
  return { userData };
}

export default function NewsRoute() {
  const { userData }: any = useLoaderData();
  return News(userData);
}
