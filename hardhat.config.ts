import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY_SEPOLIA = process.env.ALCHEMY_API_KEY_SEPOLIA;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    SEPOLIA: {
      url : 'https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY_SEPOLIA}',
      accounts: [process.env.PRIVATE_KEY_SEPOLIA || ""]
    }
  },
  etherscan: {},

};

export default config;
