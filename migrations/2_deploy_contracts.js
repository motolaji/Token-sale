var TransBlockToken = artifacts.require("./TransBlockToken.sol");
var TransBlockTokenSale = artifacts.require("./TransBlockTokenSale.sol");

module.exports = function(deployer) {
    deployer.deploy(TransBlockToken, 1000000).then(function() {
        // Token price is 0.001 BNB
        var tokenPrice = 1000000000000000;
        return deployer.deploy(TransBlockTokenSale, TransBlockToken.address, tokenPrice);
    });
};