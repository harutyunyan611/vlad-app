import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://tech-task25.herokuapp.com/graphql',
    cache: new InMemoryCache()
});

export const profileAPI = {
    async getProfiles(status){
        const response = await client
            .query({
            query: gql`
                query GetRequests {
                    requests {
                        id,
                        requesterName,
                        status,
                        price,
                        profilePictureUrl,
                        contentLink
                    }
                }
            `
            })
            return response.data.requests.filter(item => item.status === status)
    },
}