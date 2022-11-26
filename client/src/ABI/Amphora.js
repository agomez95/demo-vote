import {provider, contract} from "./Contract"

const connectWallet = async () => {      
    await provider.send("eth_requestAccounts", [])
}

const saveAmphora = async (amphoraName) => {
    let accountsOnEnable = await window.ethereum.request({method: 'eth_requestAccounts'})
    let amphoraConcatName = 'Anfora N° - 0' + amphoraName
    const amphoraUpdate = await contract.newAmphora(amphoraConcatName, accountsOnEnable[0])
    await amphoraUpdate.wait()   
    .then(() => {
      alert(`Se agrego el ${amphoraConcatName}`) 
      window.location.reload()})
    .catch(() => {
      alert("Error")
      window.location.reload()
    })
}

const validateAmphora = async (amphoraAddress) => {
    const result = await contract.validateAmphora(amphoraAddress)
    return result
}

export {connectWallet, saveAmphora, validateAmphora }
