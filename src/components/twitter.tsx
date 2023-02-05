import React from "react";
import { Grid, Pagination } from "@nextui-org/react";
import { TwitterTweetEmbed } from "react-twitter-embed";

export default function List({ dataSource, view = true }: any) {
  const [state, setState] = React.useState(1);

  return (
    <div>
      <Grid.Container justify="center" gap={1}>
        {dataSource.map((item: any) => (
          <Grid key={item.id}>
            <TwitterTweetEmbed
              placeholder="Loading"
              tweetId="1083592734038929408"
            />
          </Grid>
        ))}
      </Grid.Container>
      <Grid.Container justify="center">
        <Pagination
          total={10}
          initialPage={state}
          onChange={(info) => setState(info)}
        />
      </Grid.Container>
    </div>
  );
}
