import { useLoaderData } from "react-router-dom";
import Jobs from "../pages/jobs";
import { userData } from "../utils/data";

export async function loader() {
  return { userData };
}

export default function JobsRoute() {
  const { userData }: any = useLoaderData();
  return Jobs(userData);
}
