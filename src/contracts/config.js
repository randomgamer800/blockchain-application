export const test_edited_ADDRESS = '0xd9145CCE52D386f254917e481eB44e9943F39138';
export const test_edited_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "examStarted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stopExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const CryptExam_ADDRESS = '0xd9145CCE52D386f254917e481eB44e9943F39138';
export const CryptExam_ABI = [
	{
		"inputs": [],
		"name": "endExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "ExamEnded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "StartPassword",
				"type": "uint256"
			}
		],
		"name": "ExamStarted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "options",
				"type": "string[]"
			},
			{
				"internalType": "uint256",
				"name": "correctOption",
				"type": "uint256"
			}
		],
		"name": "postQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "questionCount",
				"type": "uint256"
			}
		],
		"name": "QuestionPosted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "Spassword",
				"type": "uint256"
			}
		],
		"name": "ReleaseSol",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "SolPassword",
				"type": "uint256"
			}
		],
		"name": "ReleaseSolution",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "questionId",
				"type": "uint256"
			}
		],
		"name": "removeQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "person",
				"type": "address"
			}
		],
		"name": "resetTeacher",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "durationMinutes",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "StartPassword",
				"type": "uint256"
			}
		],
		"name": "startExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "selectedOptions",
				"type": "string"
			}
		],
		"name": "submitAnswer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "examActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "examEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "examStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "person",
				"type": "address"
			}
		],
		"name": "getGeneralAnswerString",
		"outputs": [
			{
				"internalType": "string",
				"name": "Answers",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyAnswerString",
		"outputs": [
			{
				"internalType": "string",
				"name": "Answers",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getQuestionDetails",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "content",
				"type": "string[]"
			},
			{
				"internalType": "string[][]",
				"name": "options",
				"type": "string[][]"
			},
			{
				"internalType": "uint256[]",
				"name": "correctOption",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRemainingTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "RemainingTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "questionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "questions",
		"outputs": [
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "correctOption",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "teacher",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userQuestionAnswers",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


