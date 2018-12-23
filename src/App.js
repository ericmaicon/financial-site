import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import StockList from "./components/StockList";

const client = new ApolloClient({
  uri: "http://localhost:3000/api"
});

const App = () => (
  <ApolloProvider client={client}>
    <StockList />
  </ApolloProvider>
);

export default App;
