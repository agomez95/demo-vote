import { ethers } from "ethers"
import Election from '../config/artifacts'

const { address, abi } = Election
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
const contract = new ethers.Contract(address[5],abi,signer)

export {provider, signer, contract}

