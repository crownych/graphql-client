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
    {
        posts {
            _id
            author
            title
        }    
    }
  `,
})
    .then(result => result.data.posts.forEach((post: any) => console.log(post)))
    .catch(error => console.error(error));

