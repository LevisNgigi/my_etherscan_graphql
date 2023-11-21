// Import the RESTDataSource class from Apollo to enable REST API calls
const { RESTDataSource } = require("apollo-datasource-rest"); 

// Define the Ethereum address we will use for queries
// Using Vitalik's public address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Create an EtherDataSource class extending RESTDataSource 
// to make Etherscan API calls
class EtherDataSource extends RESTDataSource {

  // Set the base URL to the Etherscan API 
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Get Ether balance for the defined Ethereum address
  async etherBalanceByAddress() {
    
    // Call the Etherscan API to get the balance
  }
  
  // Get total Ether supply
  async totalSupplyOfEther() {
    
    // Call the Etherscan API to get total supply
  }

  // Get latest Ether price
  async getLatestEthereumPrice() {

    // Call the Etherscan API to get latest price
  }

  // Get average block confirmation time
  async getBlockConfirmationTime() {

    // Call the Etherscan API to get block confirmation time
  }
}

module.exports = EtherDataSource;