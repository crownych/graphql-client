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

const queryUsers = `{
    users {
        _id
        name
        surname
    }    
}`;

client.query({
    query: gql`{
        users {
            _id
            name
            surname
        }    
    }`,
})
    .then(result => result.data.users.forEach((user: any) => console.log(user)))
    .catch(error => console.error(error));

