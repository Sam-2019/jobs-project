import { gql } from "@apollo/client";

export const GET_JOBS = gql`
  query Jobs {
    jobs {
      id
      title
      description
      domain
      imgURL
      favicon
      url
    }
  }
`;

export const GET_JOB = gql`
  query Job($jobId: ID) {
    job(id: $jobId) {
      id
      title
      description
      domain
      imgURL
      favicon
      url
    }
  }
`;

export const GET_JOB_BY_TITLE = gql`
  query Query($title: String) {
    jobbyTitle(title: $title) {
      id
      title
      description
      domain
      imgURL
      favicon
      url
    }
  }
`;
