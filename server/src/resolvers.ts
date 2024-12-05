import { GraphQLError } from 'graphql';
import { getMember } from './services';

export const resolvers = {
  Query: {
    member: async (_root, { id }) => {
      const member = getMember(id);
      if (!member) {
        throw notFoundError(`No Member found with id ' + ${id}`);
      }
      return member;
    }
  }
};

function notFoundError(message) {
  return new GraphQLError(message, {
    extensions: { code: 'NOT_FOUND' },
  });
}