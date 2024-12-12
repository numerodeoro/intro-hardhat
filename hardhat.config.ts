import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

console.log("correr el script de hardhat");
console.log("mi variable es: ", process.env.HELLO);

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
