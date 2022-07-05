import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { mode, onlinehost, localhost } from "./utils/config";

const client = new ApolloClient({
  uri: mode === "production" ? onlinehost : localhost,
  cache: new InMemoryCache(),
});

export default function Index() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
