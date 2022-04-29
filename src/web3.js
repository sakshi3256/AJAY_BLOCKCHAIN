
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider(
  'tired kind audit swamp comic april turkey flock vault arrow private script',
  'https://rinkeby.infura.io/v3/76976787ee3340e4872c9564f6a0e989'  
);

const web3 = new Web3(provider);
//const web3 = null;
export default web3; 