// 使用官方的 apollo-boost 會發生 "fetch is not found globally and no fetcher passed" error
//
// 解決方法： 改用 apollo-client
// https://stackoverflow.com/questions/50688998/using-apolloclient-with-node-js-fetch-is-not-found-globally-and-no-fetcher-pas

import 'isomorphic-fetch';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const GRAPHQL_API_URL = "http://localhost:4001/graphql";

const client = new ApolloClient({
    uri: GRAPHQL_API_URL,
    fetch: fetch
});

client.query({
    query: gql`
    query GetPost ($id: String!) {
      post (id: $id) {
        _id
        author
        title
      }
    }
    `,
    variables: {
        "id": "5c7f4f6d5615ed40dc98b0ab",
    }
})
    .then(result => result.data.post ? console.log(result.data.post): console.log("not found"))
    .catch(error => console.error(error));

