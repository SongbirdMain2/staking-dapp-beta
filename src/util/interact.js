import Web3 from 'web3';

const { ethereum } = window;
const web3 = new Web3(ethereum);


//staking sc + abi

const stakingAddress = "0x5f5a749a5F5891F975Eee2C752C7378314F76069";
const stakingcontractabi = require("../staking_SC_abi.json");

//archer + punks + abi 

const archerAddress = "0xadb44ba95f1201b8E8383428F81653426DF9238a";
const punksAddress = "0x48dC7d943Ff998ae4B277C1e0823826b422fC33B";
const erc721contractabi = require("../erc721_abi.json");




export const stakingcontract = new web3.eth.Contract(
  stakingcontractabi,
  stakingAddress
);

export const archercontract = new web3.eth.Contract(
  erc721contractabi,
  archerAddress
); 

export const punkcontract = new web3.eth.Contract(
  erc721contractabi,
  punksAddress
); 

//above this lane the scs get iniated, below this lane the function gets called

export const enable_staking = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 archercontract.methods.setApprovalForAll(stakingAddress, true).send({from: account})
   
};

export const claim_har = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontract.methods.claimRewards().send({from: account})
   
};

export const nfts_owned_not_staked = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const nftamount = await archercontract.methods.balanceOf(account).call()


    console.log(nftamount)
    
   
    return nftamount;
};


export const availableRewards = async () => { 
  

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
    const availableRewards = await stakingcontract.methods.availableRewards(account).call()
  

    // console.log(availableRewards)
    
   
    return availableRewards;
};

export const stakedtokens = async () => { 

  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
  const stakers = await stakingcontract.methods.stakers(account).call()
  const stakedtokens = stakers[0]
//  console.log(stakedtokens)


  return stakedtokens;
};


export const stake_nft = async (id) => { 
  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontract.methods.stake(id).send({from: account})
 console.log(id)
   
};

export const unstake_nft = async (id) => { 
  
  
  const accounts = await ethereum.request({ method: "eth_accounts" });
	const account = accounts[0];
 stakingcontract.methods.withdraw(id).send({from: account})
 console.log(id)

};


export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
  
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        
        }
        ;
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
          
        };
      }
    } else {
      return {
        address: "",
        status: ( "You must install Metamask, a virtual Ethereum wallet, in your browser."

        ), }; } };

        export const getCurrentWalletConnected = async () => {
            if (window.ethereum) {
              try {
                const addressArray = await window.ethereum.request({
                  method: "eth_accounts",
                });
                if (addressArray.length > 0) {
                  return {
                    address: addressArray[0],
                    status: "👆🏽 Write a message in the text-field above.",
                  };
                } else {
                  return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                  };
                }
              } catch (err) {
                return {
                  address: "",
                  status: "😥 " + err.message,
                };
              }
            } else {
              return {
                address: "",
                status: ("You must install Metamask, a virtual Ethereum wallet, in your browser."

                ), }; } };

                