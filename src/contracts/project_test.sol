// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExamContract {
    address public owner;
    uint public startTime;
    uint public endTime;
    bool public examStarted;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
        examStarted = false;
    }

    function startExam(uint duration) public onlyOwner {
        require(!examStarted, "Exam has already started");
        startTime = block.timestamp;
        endTime = startTime + duration;
        examStarted = true;
    }

    function stopExam() public onlyOwner {
        require(examStarted, "Exam has not started");
        examStarted = false;
    }

    function getTimeTaken() public view returns (uint) {
        require(!examStarted, "Exam is still in progress");
        return endTime - startTime;
    }
}