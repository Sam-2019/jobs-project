import React from "react";
import { Button, Grid } from "@nextui-org/react";
import { colors } from "../utils/data";

export default function JobTypes() {
 const [active, setActive] = React.useState("John Brown");

 const clickHandler = (data: any) => {
  switch (data.name) {
   case data.name:
    setActive(data.name);
    break;
   default:
    active;
  }
 };

 return (
  <Grid.Container gap={2} justify="center">
   {colors.map((item: any) => (
    <Grid key={item.key}>
     <Button
      auto
      color={item.colour}
      onPress={() => clickHandler(item)}
      flat={active === item.name ? false : true}
     >
      {item.name}
     </Button>
    </Grid>
   ))}
  </Grid.Container>
 );
}
