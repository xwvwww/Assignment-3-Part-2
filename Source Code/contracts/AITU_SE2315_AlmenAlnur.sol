// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract Aitu_SE2315_AlmenAlnur is ERC20, ERC20Permit {
    address public owner;

    constructor(address _owner)
        ERC20("Aitu_SE2315_AlmenAlnur", "MTK")
        ERC20Permit("Aitu_SE2315_AlmenAlnur") payable 
    {
        owner = _owner;
        _mint(owner, 2000 * 10 ** decimals());
    }

    // Function to get the sender's address of the transaction
    function getTransactionSender() public view returns (address) {
        return msg.sender;
    }

    function getBlockTimestamp() public view returns (uint256) {
        return block.timestamp;
    }


    // Function to get the receiver's address (a given address)
    function getTransactionReceiver(address _to) public pure returns (address) {
        return _to;
    }

        // Function to get the timestamp of the latest transaction in a human-readable format
    function getLatestTransactionTimestamp() public view returns (string memory) {
        uint blockTimestamp = block.timestamp;
        return convertTimestampToDate(blockTimestamp);
    }

    // Helper function to convert timestamp to a human-readable format (e.g., years, months, days)
   function convertTimestampToDate(uint timestamp) public pure returns (string memory) {
    uint totalDays = timestamp / 86400; // Convert seconds to days
    uint numYears;  // Renamed from 'years'
    uint months;
    uint daysLeft;

    unchecked {
        numYears = totalDays / 365; 
        uint daysRemaining = totalDays % 365;
        months = daysRemaining / 30;
        daysLeft = daysRemaining % 30;
    }

    return string(abi.encodePacked(
        uint2str(numYears), " years, ", // Updated here too
        uint2str(months), " months, ",
        uint2str(daysLeft), " days"
    ));
}




    // Helper function to convert uint to string safely
function uint2str(uint _i) internal pure returns (string memory) {
    if (_i == 0) {
        return "0";
    }
    uint j = _i;
    uint len;
    
    // Calculate string length safely
    unchecked {
        while (j != 0) {
            len++;
            j /= 10;
        }
    }

    bytes memory bstr = new bytes(len);
    uint k = len - 1;
    
    // Convert number to string safely
    unchecked {
        while (_i != 0) {
            bstr[k--] = bytes1(uint8(48 + _i % 10));
            _i /= 10;
        }
    }

    return string(bstr);
}

}
