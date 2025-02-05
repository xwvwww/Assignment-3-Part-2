// Aitu_SE2315_AlmenAlnur-test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Aitu_SE2315_AlmenAlnur Contract", function () {
  let owner, addr1, addr2, contract;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Aitu_SE2315_AlmenAlnur = await ethers.getContractFactory("Aitu_SE2315_AlmenAlnur");
    contract = await Aitu_SE2315_AlmenAlnur.deploy(owner.address);
  });

  it("Should deploy the contract and set the owner correctly", async function () {
    expect(await contract.owner()).to.equal(owner.address);
  });

  it("Should mint the initial tokens to the owner address", async function () {
    const initialBalance = await contract.balanceOf(owner.address);
    const expectedBalance = ethers.parseUnits("2000", 18); // Fix: Proper BigNumber conversion
    expect(initialBalance).to.equal(expectedBalance);
  });

  it("Should allow querying of the sender address", async function () {
    const sender = await contract.connect(addr1).getTransactionSender(); // Fix: Call from a different account
    expect(sender).to.equal(addr1.address);
  });

  it("Should allow querying of the block timestamp", async function () {
    const timestamp = await contract.getBlockTimestamp();
    expect(timestamp).to.be.a('bigint'); // Fix: Use bigint instead of number
    expect(timestamp).to.be.greaterThan(0n);
  });

  it("Should allow querying of the transaction receiver address", async function () {
    const receiver = await contract.getTransactionReceiver(addr1.address);
    expect(receiver).to.equal(addr1.address);
  });

  it("Should return a human-readable timestamp of the latest transaction", async function () {
    const humanReadableTimestamp = await contract.getLatestTransactionTimestamp();
    console.log("Latest Transaction Timestamp:", humanReadableTimestamp); // Debugging output
    expect(humanReadableTimestamp).to.be.a('string');
    expect(humanReadableTimestamp.length).to.be.greaterThan(5); // Ensure it’s not empty
    expect(humanReadableTimestamp).to.include("years");
});


it("Should correctly convert the timestamp to a human-readable format", async function () {
  const timestamp = 1672531200; // Example timestamp (Jan 1, 2023)
  const humanReadableDate = await contract.convertTimestampToDate(timestamp);
  console.log("Converted Timestamp:", humanReadableDate); // Debugging output
  expect(humanReadableDate).to.be.a('string');
  expect(humanReadableDate).to.include("years"); // More flexible check
});

});
