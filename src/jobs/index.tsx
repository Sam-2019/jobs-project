import { Loading } from "@nextui-org/react";
import { useQuery } from "@apollo/client";
import { GET_JOBS } from "../utils/graphqlFunctions/queries";
import JobList from "./jobs";

export default function Jobs() {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) {
    return <Loading type="points" size="lg" />;
  }

  if (error) {
    return <p>Error</p>;
  }

  return <JobList dataSource={data} />;
}
