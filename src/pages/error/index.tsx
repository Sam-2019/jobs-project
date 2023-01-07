import { Container } from "@nextui-org/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const { statusText, data }: any = useRouteError();

  return (
    <Container>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{statusText || data}</i>
        </p>
      </div>
    </Container>
  );
}
