// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExamContract {
    address public owner;
    bool public examStarted;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
        examStarted = false;
    }

    function startExam() public onlyOwner {
        require(!examStarted, "Exam has already started");
        examStarted = true;
    }

    function stopExam() public onlyOwner {
        require(examStarted, "Exam has not started");
        examStarted = false;
    }

}