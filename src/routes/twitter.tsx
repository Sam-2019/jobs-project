import { useLoaderData } from "react-router-dom";
import Twitter from "../pages/twitter";
import { userData } from "../utils/data";

export async function loader() {
  return { userData };
}

export default function TwitterRoute() {
  const { userData }: any = useLoaderData();
  return Twitter(userData);
}
