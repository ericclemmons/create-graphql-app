const { ApolloServer, gql } = require("apollo-server-lambda");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello world!";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
    allowedHeaders: [
      "authorization",
      "content-type",
      "x-amz-security-token",
      "x-amz-date"
    ]
  }
});
