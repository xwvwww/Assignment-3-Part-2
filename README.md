# Assignment-3-Part-2
**Done by SE-2315: Alnur Almen, Zhangir Yussupov, Kumissay Zhalmagambetova**

## Overview

This project implements an ERC20 token named AITU_SE2315_AlmenAlnur using Solidity.It includes additional features such as transaction logging, sender and receiver retrieval, and event emission.

The smart contract is developed and tested using Solidity, Hardhat, VS Code.

### Features
- **ERC20 Standard Token**
- **Initial Supply of 2000 Tokens**
- **Transaction Logging with Events**
- **Retrieve Sender & Receiver Addresses**
- **Get Block Timestamp of Latest Transaction**
- **Full Hardhat Test Coverage**

## Project Structure
``` plaintext
📦 AITU_SE2315_AlmenAlnur 
 ┣ 📂 contracts 
 ┃ ┗ 📜 AITU_SE2315_AlmenAlnur.sol  # ERC20 Token Contract 
 ┣ 📂 test 
 ┃ ┣ 📜 AITU_SE2315_AlmenAlnur.js  # Tests for Initial Contract 
 ┃ ┗ 📜 AITU_SE2315_AlmenAlnur_Modified.js  # Tests for Modified Contract 
 ┣ 📜 hardhat.config.js  # Hardhat Configuration
 ┣ 📜 package.json  # Dependencies 
 ┣ 📜 README.md  # Project Documentation 
 ┗ 📜 LICENSE  # MIT License 
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd AITU_SE2315_AlmenAlnur
   ```

2. **Install dependencies**:
   Install Node.js packages
   ```bash
   npm install]
   ```

3. **Compile the Smart Contract**:
   ```bash
   npx hardhat compile
   ```
4. **Run test cases**:
   ```bash
   npx hardhat test
   ```

## License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## References
1. [Hardhat Tutorial](https://docs.web3js.org/]https://hardhat.org/tutorial)
2. [Hardhat Testing Contracts](https://hardhat.org/tutorial/testing-contracts)
3. [Guide](https://hardhat.org/hardhat-runner/docs/guides/test-contracts)






