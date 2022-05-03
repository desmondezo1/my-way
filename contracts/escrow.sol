//SPDX-License-Identifier: Unlicensed
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


    function depositToContract(string memory _secretHash)public payable {
        require(msg.value > 0, "Cannot send O amount");

        //store the address of the caller to prevent alterations when many persons are accessing the contract simultaneously
        vendors[msg.sender] = msg.sender;

        //if deposit to contract is successful, then take records
        balances[msg.sender] += msg.value;

        emit txInfo(_secretHash);
    }

    //this will be called by the Vendor
    function pairVendorToMessenger(address _messenger, uint _value) public{
        require(_value > 0, "Cannot allocate 0 value to commuter");
        require(_value <= balances[msg.sender], "Sorry, you cannot allocate what you have");
        require(msg.sender != _messenger, "User cannot allocate funds to self");


        messengers[_messenger] = _messenger;  //is this line relevant?\

        balances[msg.sender] -= _value;
        payingToMessenger[msg.sender][_messenger] += _value;

        //...then say package has not been delivered
        isPackageDelivered[msg.sender][_messenger] = false;

        //isVendorPairedToMessenger[msg.sender][_messenger] = true;


    }

    function getStagedMoney(address vendor, address messenger) public view returns(uint){
        return payingToMessenger[vendor][messenger];
    }

    //
    function confirmDelivery(bool _isConfirmed, address _vendor, address _messenger) public {

        isPackageDelivered[_vendor][_messenger] = _isConfirmed;

        // ADD THIS LOGIC TO web3.js

        if(isPackageDelivered[_vendor][_messenger]){
            payMessenger(_vendor, _messenger);
        }else{
            emit feedbackLog("Sorry! Your transaction has not been verified");
        }
    }



    function payMessenger(address _vendor, address _messenger)internal{

        //set conditions for payment
        if(isPackageDelivered[_vendor][_messenger]){

            //how much did seller and messenger agree on?
            uint agreedPrice = payingToMessenger[_vendor][_messenger];

            //Deduct 5% to pay admin
            uint fivePercent = agreedPrice / 100;
            fivePercent = fivePercent * 5;

            //Get amount to pay to Messenger
            uint payoutToMessenger = agreedPrice - fivePercent;

            //remove agreedPrice from the vendor records and staging
            balances[_vendor] -= agreedPrice;
            payingToMessenger[_vendor][_messenger] -= agreedPrice;

            //then try paying the messenger. If it fails, re-update the records
            if(payable(_messenger).send(payoutToMessenger)){
                emit feedbackLog("messenger paid successfully");

                //if paying the messener works, pay the admin as well
                payable(contractOwner).transfer(fivePercent);

            }else{
                balances[_vendor] += agreedPrice;
                payingToMessenger[_vendor][_messenger] += agreedPrice;
                emit feedbackLog("could not pay messenger. Money returned successfully");
            }

        }else{
            emit feedbackLog("Transaction not completed");
        }
    }

    /**
    *@dev this function allows the messenger reject the staged funds,
    * thus allowing the vendor withdraw it peacefully
     */
    function messengerRejectsFunds(address vendor_)public{

        uint temp = payingToMessenger[vendor_][msg.sender];
        payingToMessenger[vendor_][msg.sender] = 0;

        balances[vendor_] += temp;

    }


    /**
    *@dev The condition for this will be that the funds from the vendor(__vendor) has not been
    * assigned to a particular commuter (_messenger)
    *
    * Note: Only the VENDOR or an ADMIN can call this function
     */
    function returnMoneyToVendor(address __vendor, uint _value) public {
       // require(isVendorPairedToMessenger[__vendor][_messenger] == false, "Sorry, money has already been commited to the commuter");
        require(_value <= balances[__vendor], "Insufficient Vendor balance");

        balances[__vendor] -= _value;

        if(payable(__vendor).send(_value)){
            emit feedbackLog("withdrawal successful");
        }else{

            balances[__vendor] += _value;

            emit feedbackLog("withdrawal failed. Money returned");
        }
    }
}