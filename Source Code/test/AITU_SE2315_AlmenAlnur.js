const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Aitu_SE2315_AlmenAlnur", function () {
    let Token, token, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();

        Token = await ethers.getContractFactory("Aitu_SE2315_AlmenAlnur");
        token = await Token.deploy(owner.address); // Pass the owner's address
        await token.waitForDeployment(); // Wait for deployment
    });

    it("Should have correct initial supply", async function () {
        const balance = await token.balanceOf(owner.address);
        expect(balance).to.equal(ethers.parseUnits("2000", 18)); // 2000 tokens with 18 decimals
    });

    it("Should transfer tokens successfully", async function () {
        await token.transfer(addr1.address, ethers.parseUnits("100", 18)); // Transfer 100 tokens
        const balance = await token.balanceOf(addr1.address);
        expect(balance).to.equal(ethers.parseUnits("100", 18)); // Check if balance is correct
    });

    it("Should return correct block timestamp", async function () {
        const blockTimestamp = await token.getBlockTimestamp();
        expect(blockTimestamp).to.be.a("bigint"); // Ensure timestamp is a string
    });

    it("Should retrieve sender and receiver addresses", async function () {
        const sender = await token.getTransactionSender();
        const receiver = await token.getTransactionReceiver(addr1.address);
        expect(sender).to.equal(owner.address); // Verify sender's address
        expect(receiver).to.equal(addr1.address); // Verify receiver's address
    });
});
