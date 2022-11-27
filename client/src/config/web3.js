import { Web3Provider } from "@ethersproject/providers"
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
    supportedChainIds: [
        1, //mainnet
        5 //goerli
    ],
})

function getLibrary(provider) {
  return new Web3Provider(provider);
}
export { injected, getLibrary}