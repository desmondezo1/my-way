//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "../node_modules/hardhat/console.sol";

contract Escrow {
    //State Variables
    address public contractOwner;
    address public vendor;
    address public messenger;
   
    //Records
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint)) payingToMessenger;
    mapping(address => mapping(address => bool)) isPackageDelivered;

    //Events
    event txInfo(string _secret);


    /*Functions
    depositToContract
    payMessenger
    withdraw
    goodReceived


    */

    /*Modifiers
    onlyOwner
    onlySeller

    */

    constructor(){
        contractOwner = msg.sender;
    }

    modifier onlyVendor{
        require(msg.sender == vendor, "Only a can put money up");
        _;
    }

    function depositToContract(uint amountSent, address _messenger, string memory _secretHash)public onlyVendor payable {
        require(msg.value > 0, "Cannot send O amount");
        messenger = _messenger;

        //if deposit to contract is successful, then take records
        balances[vendor] += amountSent;
        payingToMessenger[vendor][messenger] += amountSent;

        //...then say package has not been delivered
        isPackageDelivered[vendor][messenger] = false;
        emit txInfo(_secretHash);
    }

    function confirmDelivery(bool _isConfirmed) public{

        isPackageDelivered[vendor][messenger] = _isConfirmed;

        if(isPackageDelivered[vendor][messenger]){
            payMessenger();
        }else{
            //report that delivery has not been confirmed
        }
    }

    function payMessenger()internal{
        //set conditions for payment

        //how much did seller and messenger agree on?
        uint agreedPrice = payingToMessenger[vendor][messenger];

        //remove that amount from the records
        balances[vendor] -= agreedPrice;
        payingToMessenger[vendor][messenger] -= agreedPrice;

        //then try paying the messenger. If it fails, re-update the records
        if(payable(messenger).send(agreedPrice)){
            console.log("messenger paid successfully");
        }else{
            balances[vendor] += agreedPrice;
            payingToMessenger[vendor][messenger] += agreedPrice;
            console.log("could not pay messenger. Money returned successfully");
        }
    }

    function sellerWithdraw()public {
        

    }

}