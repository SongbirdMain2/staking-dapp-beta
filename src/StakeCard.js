import { Card, Button, Container, Col, Row } from "react-bootstrap";
// import Tilt from "react-tilt";
import Web3 from "web3";

import { archercontract, stakingcontract, stake_nft, unstake_nft } from "./util/interact.js";

const { ethereum } = window;
const web3 = new Web3(ethereum);

const StakeCard = () => {
  // const showAccount = document.querySelector('.showAccount');
  function register() {
    // Register functionality here
  }
  function submit() {
    // submit functionality here
  }
  return (
    <div>
      {/* <Tilt
        className="Tilt"
        options={{
          max: 0,
          reverse: false, // reverse the tilt direction
          max: 15, // max tilt rotation (degrees)
          perspective: 3500, // Transform perspective, the lower the more extreme the tilt gets.
          scale: 1, // 2 = 200%, 1.5 = 150%, etc..
          speed: 300, // Speed of the enter/exit transition
          transition: true, // Set a transition on enter/exit.
          axis: null, // What axis should be disabled. Can be X or Y.
          reset: true, // If the tilt effect has to be reset on exit.
          easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        }}
      > */}
      <Container fluid>
        <Card
          style={{
            border: "2px solid white",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundPosition: "50% 50%",
            maxWidth: "600px",
            borderRadius: "0.75rem",
            boxShadow: "2px 2px 10px #00F7FF"
          }}
          className="margin1"
        >
          <Card.Body>
            <h2 className="text1">Mint NFT -> Ignore for now</h2>
            <p className="paragraph">Collection Name</p>
            <form id="nft">
              <div
                id="template"
                className="row"
                style={{ textAlign: "center"  }}
              >
                <div class="col-md-12">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "10rem", width: "auto" , borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF"}}
                    />
                    <p className="paragraph" style={{ textAlign: "left" }}>
                      Price : <span className="answer">0</span>{" "}
                    </p>
                    <p
                      className="paragraph"
                      style={{ textAlign: "left", marginTop: "-10px" }}
                    >
                      Collection Size : <span className="answer"> 0</span>{" "}
                    </p>
                  </div>
                  <div class="qty mt-2">
                    <span class="minus ">-</span>
                    <input type="number" class="count" name="qty" value="1" />
                    <span class="plus ">+</span>
                  </div>
                  <button type="button"
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Mint
                  </button>
                </div>
              </div>
            </form>
            <br />
          </Card.Body>
        </Card>
        <Card
          style={{
            border: "2px solid white",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundPosition: "50% 50%",
            maxWidth: "600px",
            borderRadius: "0.75rem",
            boxShadow: "2px 2px 10px #00F7FF"
          }}
          className="margin1"
        >
          <Card.Body>
            <h2 className="text1">Unstaked NFTs</h2>
            <form id="nft">
              <div  onLoad={render_unstaked_cards} type="button"

            onClick={e => stake_nft(e.target.value)}
                id="locationunstakednfts"
                className="row"
                style={{ textAlign: "center" }}
              >
                <template><div id="templateunstaked" class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "10rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
                    />
                  </div>
                  <button value ="15" id="15" type="button"
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div></template>
                
                {/* <div class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "10rem", width: "auto" }}
                    />
                  </div>
                  <button
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div>
                <div class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "10rem", width: "auto" }}
                    />
                  </div>
                  <button
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div> */}
              </div>
            </form>
          </Card.Body>
          <Card.Body>
            <h2 className="text1">Staked NFTs</h2>
            <form id="nft">
              <div type="button" onClick={e => unstake_nft(e.target.value)} onLoad={render_staked_cards}
                  id= "locationstakednfts"
                className="row"
                style={{ textAlign: "center" }}
              >
                <template><div   id="templatestaked" class="col-md-4">
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <p class="Name" className="paragraph">
                      Archer of Harmony #15
                    </p>{" "}
                    <img
                      src="https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/15.png"
                      style={{ height: "10rem", width: "auto", borderRadius:"30px", boxShadow: "2px 2px 10px #00F7FF" }}
                    />
                  </div>
                  <button value="15" type="button" 
                    className="solbuttoninner"
                    style={{
                      margin: "10px auto",
                    }}
                  >
                    Stake/Unstake
                  </button>
                  <hr />
                </div></template>
                
                
              </div>
              
           
            </form>
          </Card.Body>
          {/*
          
           <Row className="mb-4">
            <Col md={6}>
              <button
                onClick={render_unstaked_cards}
                className="solbuttoninnermint "
                style={{ margin: "auto" }}
              >
                Show unstaked nfts
              </button>
            </Col>
            <Col md={6}>
              <button type="button"
                onClick={render_staked_cards}
                style={{ margin: "auto" }}
                className="solbuttoninnermint"
              >
                Show staked nfts
              </button>
            </Col>
                  </Row> */}
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

const render_unstaked_cards = async () => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];

  const notstaked = await archercontract.methods
    .balanceOf(account)
    .call(); // here should be account in the bracket

  // document.getElementById("nfts").innerHTML = ""

  for (let i = 0; i < notstaked; i++) {
    const tokenId = await archercontract.methods
      .tokenOfOwnerByIndex(account, i)
      .call(); // here should be account in the bracket

    let tokenMetadataURI = await archercontract.methods
      .tokenURI(tokenId)
      .call();

    const tokentemplate = document.getElementById("templateunstaked").cloneNode(true);
    console.log(tokentemplate);
    tokentemplate.querySelector(
      "p"
    ).innerText = `Archer of Harmony #${tokenId}`;
    // tokentemplate.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${tokenId}`
    tokentemplate.querySelector(
      "img"
    ).src = `https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/${tokenId}.png`;
    tokentemplate.querySelector("button").innerText = "Stake";
    tokentemplate.querySelector("button").value = tokenId;

    document.getElementById("locationunstakednfts").append(tokentemplate);
  }
};

const render_staked_cards = async () => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];

  const amount = await stakingcontract.methods
    .stakers(account)
    .call();

  const tokenIDs = await stakingcontract.methods
    .getStakedTokens(account)
    .call();

  const TID = tokenIDs[0].tokenId;
  console.log(TID);

  // document.getElementById("nfts").innerHTML = ""

  for (let i = 0; i < amount[0]; i++) {
    const tokenIDs = await stakingcontract.methods
      .getStakedTokens(account)
      .call();

    const TID = tokenIDs[i].tokenId; // value is a tuple. which gets deconstruted here

    const tokentemplate = document.getElementById("templatestaked").cloneNode(true);
   
    tokentemplate.querySelector("p").innerText = `Archer of Harmony #${TID}`;
    // tokentemplate.querySelector("a").href = `https://opensea.io/assets/0x45db714f24f5a313569c41683047f1d49e78ba07/${TID}`
    tokentemplate.querySelector(
      "img"
    ).src = `https://harmony.mypinata.cloud/ipfs/QmW2EHh5DjqVQq76KNfcENwStFbjgWE8H3Zu4FUeFdbacf/${TID}.png`;
   
   
  
    
   
   
   
   
 
    tokentemplate.querySelector("button").innerText = "Unstake";
    tokentemplate.querySelector("button").value = TID;
    console.log(tokentemplate);
    

    document.getElementById("locationstakednfts").append(tokentemplate);
  }
};

export default StakeCard;
