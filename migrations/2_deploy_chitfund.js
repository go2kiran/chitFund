const ChitFund = artifacts.require("ChitFund");
const ChitFundFactory = artifacts.require("ChitFundFactory");

module.exports = function (deployer) {
  deployer.deploy(ChitFund, "GoGetFund", 1, 5, 5);
  deployer.deploy(ChitFundFactory);
};
