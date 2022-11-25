import {provider, contract} from "./Contract"

const connectWallet = async () => {      
    await provider.send("eth_requestAccounts", [])
}

const saveVote = async (groupSelected, studentCode) => {
    const voteAdding = await contract.voting(groupSelected, studentCode)
    await voteAdding.wait()   
        .then(() => {
            alert(`El codigo ${studentCode} realizo su voto exitosamente`) 
            window.location.reload()})
        .catch(() => {
            alert("Error")
            window.location.reload()
    }) 
}

const getVotes = async () => {
    let voteCounter = await contract.counter()
    let voteCounterNumber = voteCounter.toNumber()
    const array = []
    for(let i = 0; i < voteCounterNumber; i++){
      const data = await contract.votes(i)      
      const obj = {}
      obj.counter = data[0].toNumber()
      obj.code = data[1].toString()      
      obj.addr = data[2].toString()  
      array.push(obj)
    }
    return array
}

export {connectWallet, saveVote, getVotes}
