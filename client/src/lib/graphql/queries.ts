import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({ uri: 'http://localhost:9000/graphql' });

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMember = gql(`
  query member($id: ID!) {
    member(id: $id) {
      id
      firstName
      lastName
      email
      details {
        memberType
      }
      visits {
        facility
        visitDate
        visitTime
      }
    }
  }
`);
