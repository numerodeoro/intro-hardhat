const hre = require("hardhat");

async function main() {
  const accounts = await hre.ethers.getSigners();
  const provider = await hre.ethers.provider;
  console.log("🚀 ~ main ~ provider:", provider);

  for (const account of accounts) {
    console.log(account.address);
    const accountBalance = await provider.getBalance(account.address);
    console.log("🚀 ~ main ~ accountBalance:", accountBalance);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});