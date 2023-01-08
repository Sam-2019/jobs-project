import { Navbar, Link, Text } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { AcmeLogo } from "./acmeLogo";

export default function Navigation() {
  const collapseItems = [
   {id: 1, name: "Twitter", path: "/twitter"},
   {id: 2, name: "Jobs", path: "/jobs"},
   {id: 3, name: "News", path: "/news"},
   {id: 4, name: "Art", path: "/art"},
   {id: 5, name: "Movies", path: "/movies"}
  ];

  let { pathname } = useLocation();

  const setActive = (path: any) => {
    return pathname === path ? true : false;
  };

  return (
    <Navbar variant="floating">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand css={{"@xs": { w: "12%" } }}>
        <Link color="inherit" href= "/">
              <AcmeLogo />
        </Link>
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
      >
        <Navbar.Link isActive={setActive("/news")} href="/news">News</Navbar.Link>
        <Navbar.Link isActive={setActive("/art")} href="/art">Art</Navbar.Link>
        <Navbar.Link isActive={setActive("/movies")} href="/movies">Movies</Navbar.Link>
        <Navbar.Link isActive={setActive("/twitter")} href="/twitter">Twitter</Navbar.Link>
        <Navbar.Link isActive={setActive("/jobs")} href="jobs">Jobs</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
      </Navbar.Content>
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
              href= {item.path}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
