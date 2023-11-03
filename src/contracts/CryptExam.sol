// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExamContract {
    address public teacher;
    uint private Qpassword;
    uint private Spassword;
    uint public questionCount;
    uint public examStartTime;
    uint public examEndTime;
    bool public examActive;

    struct Question {
        string content;
        string[] options;
        uint correctOption;
        uint totalAnswers;
    }

    mapping(uint => Question) public questions;
    mapping(address => string) public userQuestionAnswers;

    event QuestionPosted(uint indexed questionId, string content);
    event AnswerSubmitted(address indexed user, uint[] selectedOption);
    event ExamStarted(uint startTime,uint StartPassword);
    event ExamEnded();
    event ReleaseSol(uint Spassword);

    modifier onlyTeacher() {
        require(msg.sender == teacher, "Only the teacher can perform this action");
        _;
    }

    modifier onlyDuringExam() {
        require(examActive, "The exam is not active");
        _;
    }


    constructor() {
        teacher = msg.sender;
        questionCount = 0;
    }

    function resetTeacher(address person) public{
        teacher = person;
    }

    function postQuestion(string memory content, string[] memory options, uint correctOption) public onlyTeacher {
        require(options.length > 0, "Invalid question data");
        
        questions[questionCount] = Question({
            content: content,
            options: options,
            correctOption: correctOption,
            totalAnswers: 0
        });
        questionCount++;

        emit QuestionPosted(questionCount, content);
    }


    function removeQuestion(uint questionId) public onlyTeacher onlyDuringExam {
        require(questionId < questionCount, "Invalid question ID");

        // Additional check to ensure the exam is not active.
        require(!examActive, "Cannot remove a question while the exam is active");

        // Delete the question from the questions mapping by shifting elements.
        for (uint i = questionId; i < questionCount; i++) {
            questions[i] = questions[i + 1];
        }

        // Decrement the question count before clearing the last element in the mapping.
        questionCount--;

        // Clear the last element in the mapping.
        delete questions[questionCount];
    }


    function startExam(uint durationMinutes, uint StartPassword) public onlyTeacher {
        require(!examActive, "The exam is already active");
        require(durationMinutes > 0, "Invalid exam duration");

        examStartTime = block.timestamp;
        examEndTime = examStartTime + durationMinutes * 1 minutes;
        examActive = true;
        Qpassword = StartPassword;

        emit ExamStarted(examStartTime,StartPassword);
    }

    function endExam() public onlyTeacher {
        require(examActive, "The exam has already ended");
        examActive = false;
        emit ExamEnded();
    }

    function ReleaseSolution(uint SolPassword) public onlyTeacher {
        require(!examActive, "The exam has not ended yet");
        require(examStartTime > 0, "Exam has not taken place yet");
        Spassword = SolPassword;
        emit ReleaseSol(Spassword);
    }

    function checkAndEndExam() internal {
        if (block.timestamp >= examEndTime) {
            examActive = false;
            emit ExamEnded();
        }
    }

    function getRemainingTime() public onlyDuringExam view returns (uint RemainingTime){
        require(examActive, "The exam has ended"); // Check if the exam is still active.
        RemainingTime = examEndTime - block.timestamp;
    }

    function submitAnswer(string memory selectedOptions) public onlyDuringExam {
        // Check if the exam is still active and end it if necessary.
        if (block.timestamp >= examEndTime) {
            examActive = false;
            emit ExamEnded();
        }
        require(examActive, "The exam has ended"); // Check if the exam is still active.
        userQuestionAnswers[msg.sender] = selectedOptions; // Store the answer index.
    }

    function getQuestionDetails() public view returns (string[] memory content, string[][] memory options, uint[] memory correctOption) {
        options = new string[][](questionCount);
        content = new string[](questionCount);
        correctOption = new uint[](questionCount);
        for(uint i = 0;i < questionCount;i++){
            Question storage question = questions[i];
            content[i] = question.content;
            options[i] = question.options;
            correctOption[i] = question.correctOption;
        }
    }

    function getMyAnswerString() public view returns (string memory Answers){
        Answers = userQuestionAnswers[msg.sender];
    }

    function getGeneralAnswerString(address person) public view returns (string memory Answers){
        Answers = userQuestionAnswers[person];
    }

}
