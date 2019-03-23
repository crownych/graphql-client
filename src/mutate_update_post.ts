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

client.mutate({
    mutation: gql`
    mutation UpdatePost ($id: String!, $author: String!, $title: String!) {
        updatePost (id: $id, author: $author, title: $title) {
            _id
            author
            title
        }    
    }
    `,
    variables: {
        "id": "5c81e3f999ee319f02be41f5",
        "author": "5c7f4f6d5615ed40dc98b0ab",
        "title": "post-2",
    }
})
    .then(result => console.log(result.data.updatePost))
    .catch(error => console.error(error));

