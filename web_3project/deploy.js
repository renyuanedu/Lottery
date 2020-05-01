const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDwalletProvider(
    'wonder estate apart exist ability diesel elder screen mass space edit around' ,  //助记词
    'https://ropsten.infura.io/v3/bcf63d5a09d24c19b743541d0c86f0fd',  //https://infura.io/里的地址

);
const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attemp to deploy contract',accounts[0]);
}
deploy();