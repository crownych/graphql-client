# Apollo Client

https://github.com/apollographql/apollo-client

## installation

注意：使用官方的 apollo-boost 會發生 "fetch is not found globally and no fetcher passed" error
所以不使用 apollo-boost preset package，改用單獨安裝方法
參考： https://stackoverflow.com/questions/50688998/using-apolloclient-with-node-js-fetch-is-not-found-globally-and-no-fetcher-pas

```
# 安裝 preset package
$ yarn add apollo-boost graphql-tag graphql

# 自行安裝獨立的 packages
$ yarn add apollo-client apollo-cache-inmemory apollo-link-http graphql-tag graphql
```
