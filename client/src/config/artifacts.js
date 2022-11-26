const Election = {
    address: {
      5: "0xa4bD3F9A2f54Edab32c93cE6A2e7B8b4678e9B4e",
    },
    abi: [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "_name",
            "type": "string"
          }
        ],
        "name": "addedAmphora",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "string",
            "name": "_group",
            "type": "string"
          }
        ],
        "name": "addedCandidate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_choise",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "_code",
            "type": "string"
          }
        ],
        "name": "ballot",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "amphoras",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "valid",
            "type": "bool"
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
        "name": "candidates",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "identyfier",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "group",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "valid",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "counter",
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
            "name": "id",
            "type": "uint256"
          }
        ],
        "name": "getCandidates",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "identyfier",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "group",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
              }
            ],
            "internalType": "struct Election.Candidate",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "idenAmphoras",
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
        "name": "idenCandidates",
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
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_addrr",
            "type": "address"
          }
        ],
        "name": "newAmphora",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_group",
            "type": "string"
          }
        ],
        "name": "newCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_from",
            "type": "address"
          }
        ],
        "name": "validateAmphora",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "votes",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "counter",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "code",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint16",
            "name": "_option",
            "type": "uint16"
          },
          {
            "internalType": "string",
            "name": "_code",
            "type": "string"
          }
        ],
        "name": "voting",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
}

export default Election;