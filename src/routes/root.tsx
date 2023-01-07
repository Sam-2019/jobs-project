import { Outlet, useLoaderData } from "react-router-dom";
import Navigation from "../components/navbar";
import { userData } from "../utils/data";

export async function loader() {
  return { userData };
}

export default function Root() {
  // const { userData }: any = useLoaderData();
  // console.log(userData);
  return (
    <>
      <Navigation />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
