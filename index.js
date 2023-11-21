// Import Apollo Server and graphql schema 
const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");

// Import custom EtherDataSource 
const EtherDataSource = require("./datasource/ethDatasource"); 

// Import schema
const typeDefs = importSchema("./schema.graphql");

// Load environment variables
require("dotenv").config();

// Define resolvers that call data source methods
const resolvers = {
  Query: {
    etherBalanceByAddress: (root, _args, { dataSources }) => 
      // Call etherBalanceByAddress method on eth data source
      dataSources.ethDataSource.etherBalanceByAddress(),

    totalSupplyOfEther: (root, _args, { dataSources }) =>
      // Call totalSupplyOfEther method on eth data source  
      dataSources.ethDataSource.totalSupplyOfEther(),

    latestEthereumPrice: (root, _args, { dataSources }) =>
      // Call getLatestEthereumPrice method on eth data source
      dataSources.ethDataSource.getLatestEthereumPrice(),

    blockConfirmationTime: (root, _args, { dataSources }) =>
      // Call getBlockConfirmationTime method on eth data source
      dataSources.ethDataSource.getBlockConfirmationTime(),
  },
};

// Create ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    // Instantiate EtherDataSource
    ethDataSource: new EtherDataSource(),  
  }), 
});

// Start server
server.listen("9000").then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});