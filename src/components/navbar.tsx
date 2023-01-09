import { Navbar, Link, Text } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { AcmeLogo } from "./acmeLogo";
import { collapseItems } from "../utils/data";

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
        <Navbar.Link
          isActive={setActive(collapseItems[0].path)}
          href={collapseItems[0].path}
        >
          {collapseItems[0].name}
        </Navbar.Link>
        <Navbar.Link
          isActive={setActive(collapseItems[1].path)}
          href={collapseItems[1].path}
        >
          {collapseItems[1].name}
        </Navbar.Link>
        <Navbar.Link
          isActive={setActive(collapseItems[2].path)}
          href={collapseItems[2].path}
        >
          {collapseItems[2].name}
        </Navbar.Link>
        <Navbar.Link
          isActive={setActive(collapseItems[3].path)}
          href={collapseItems[3].path}
        >
          {collapseItems[3].name}
        </Navbar.Link>
        <Navbar.Link
          isActive={setActive(collapseItems[4].path)}
          href={collapseItems[4].path}
        >
          {collapseItems[4].name}
        </Navbar.Link>
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
        {collapseItems.map((item) => (
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
