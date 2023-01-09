import { Navbar, Link, Text } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { AcmeLogo } from "./acmeLogo";
import { updatedcollapseItems } from "../utils/data";

export default function Navigation() {
  let { pathname } = useLocation();

  const setActive = (path: any) => {
    return pathname === path ? true : false;
  };

  return (
    <Navbar variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand css={{ "@xs": { w: "12%" } }}>
        <Link color="inherit" href="/">
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        {updatedcollapseItems.map((item) => (
          <Navbar.Link
            key={item.id}
            isActive={setActive(item.path)}
            href={item.path}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      ></Navbar.Content>
      <Navbar.Collapse>
        {updatedcollapseItems.map((item) => (
          <Navbar.CollapseItem
            key={item.id}
            activeColor="secondary"
            isActive={setActive(item.path)}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.path}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
