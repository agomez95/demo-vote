import {provider, contract} from "./Contract"

const connectWallet = async () => {      
    await provider.send("eth_requestAccounts", [])
}

const saveCandidate = async (group) => {
    const candidatesUpdate = await contract.newCandidate(group)   
    await candidatesUpdate.wait()
    .then(() => {
      alert("Candidato Agregado") 
      window.location.reload()})
    .catch(() => {
      alert("Error")
      window.location.reload()
    })   
}

const getCandidates = async () => {
    let candidateCounter = await contract.idenCandidates()
    let candidateCounterNumber = candidateCounter.toNumber()
    const array = []
    for(let i = 0; i < candidateCounterNumber; i++){
      const data = await contract.candidates(i)      
      const obj = {}
      obj.identyfier = data[0].toNumber()
      obj.group = data[1].toString()      
      obj.voteCount = data[2].toNumber()  
      array.push(obj)
    }
    return array
}

export {connectWallet, saveCandidate, getCandidates}
