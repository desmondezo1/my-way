//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

//import "../node_modules/hardhat/console.sol";

contract Escrow {
    address public contractOwner;
    
    //Records
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint)) payingToMessenger;
    mapping(address => mapping(address => bool)) isPackageDelivered;
    mapping(address => address) vendors;
    mapping(address => address) messengers;

    //Events
    event txInfo(string _secret);
    event feedbackLog(string _feedback);

    constructor(){
        contractOwner = msg.sender;
    }


    function depositToContract(address _messenger, string memory _secretHash)public payable {
        require(msg.value > 0, "Cannot send O amount");
        uint amountSent = msg.value;
        address caller = msg.sender;

        //store the address of the caller to prevent alterations when many persons are accessing the contract simultaneously
        vendors[caller] = msg.sender;
        address localMan;
        messengers[localMan] = _messenger;
        address takeControl = messengers[localMan];

        //if deposit to contract is successful, then take records
        balances[caller] += amountSent;
        payingToMessenger[caller][takeControl] += amountSent;

        //...then say package has not been delivered
        isPackageDelivered[caller][takeControl] = false;
        emit txInfo(_secretHash);
    }

    function getStagedMoney(address vendor, address messenger) public view returns(uint){
        return payingToMessenger[vendor][messenger];
    }

    function confirmDelivery(bool _isConfirmed, address _vendor, address _messenger) public {

        isPackageDelivered[_vendor][_messenger] = _isConfirmed;

        //set conditions for payment
        if(isPackageDelivered[_vendor][_messenger]){

            //how much did seller and messenger agree on?
            uint agreedPrice = payingToMessenger[_vendor][_messenger];

            //remove that amount from the records
            balances[_vendor] -= agreedPrice;
            payingToMessenger[_vendor][_messenger] -= agreedPrice;

            //then try paying the messenger. If it fails, re-update the records
            if(payable(_messenger).send(agreedPrice)){
                emit feedbackLog("messenger paid successfully");
            }else{
                balances[_vendor] += agreedPrice;
                payingToMessenger[_vendor][_messenger] += agreedPrice;
                emit feedbackLog("could not pay messenger. Money returned successfully");
            }
        }else{
            emit feedbackLog("Transaction not completed");
        }

       /* ADD THIS LOGIC TO web3.js
       
        if(isPackageDelivered[_vendor][_messenger]){
            payMessenger(_vendor, _messenger);
        }else{
            emit feedbackLog("Sorry! Your transaction has not been verified");
        }*/
    }

    function payMessenger(address _vendor, address messenger)internal{
        //set conditions for payment

        //how much did seller and messenger agree on?
        uint agreedPrice = payingToMessenger[_vendor][messenger];

        //remove that amount from the records
        balances[_vendor] -= agreedPrice;
        payingToMessenger[_vendor][messenger] -= agreedPrice;

        //then try paying the messenger. If it fails, re-update the records
        if(payable(messenger).send(agreedPrice)){
            emit feedbackLog("messenger paid successfully");
        }else{
            balances[_vendor] += agreedPrice;
            payingToMessenger[_vendor][messenger] += agreedPrice;
            emit feedbackLog("could not pay messenger. Money returned successfully");
        }
    }

    
    function returnMoneyToVendor(address __vendor, address _messenger) public {
        require(msg.sender == contractOwner, "Only Admin can do this");
        uint amount = payingToMessenger[__vendor][_messenger];

        balances[__vendor] -= amount;
        payingToMessenger[__vendor][_messenger] = 0;


        if(payable(__vendor).send(amount)){
            emit feedbackLog("withdrawal successful");
        }else{
            
            balances[__vendor] += amount;
            payingToMessenger[__vendor][_messenger] += amount;
            emit feedbackLog("withdrawal failed. Money returned");
        }
    }
}