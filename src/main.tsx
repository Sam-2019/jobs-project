import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { mode, onlinehost, localhost } from "./utils/config";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: mode === "production" ? onlinehost : localhost,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
