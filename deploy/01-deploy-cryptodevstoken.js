const { CRYPTODEVSTOKEN_CONTRACT_ADDRESS } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [CRYPTODEVSTOKEN_CONTRACT_ADDRESS]

    await deploy("CryptoDevToken", {
        from: deployer,
        log: true,
        args: args,
    })
    log("CryptoDevToken Deployed!")
    log("-----------------------------------------------")
}

module.exports.tags = ["all", "CryptoDevToken"]
