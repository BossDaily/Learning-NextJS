import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: 'https://learn.comparatorcraftsmp.net/api/graphql',
    cache: new InMemoryCache()
})

export default apolloClient