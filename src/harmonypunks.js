import Web3 from "web3";
import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { punkcontract } from "./util/interact.js";

const { ethereum } = window;
const web3 = new Web3(ethereum);

const HarmonyPunks = () => {
  // const showAccount = document.querySelector('.showAccount');
  function register() {
    // Register functionality here
  }
  function submit() {
    // submit functionality here
  }

  const [ownedpunks, setownedpunks] = useState("0"); //default message

  useEffect(async () => {
    const ownedpunks = await harmonypunks_owned();

    setownedpunks(ownedpunks);

    // addSmartContractListener();
  }, []);
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
            <h2 className="text1">Harmony Punk Info</h2>
            <div className="row">
              <div className="col-md-12">
                <br />
                <p className="paragraph" style={{ textAlign: "justify" }}>
                  Owned Harmony Punks:{" "}
                  <span className="answer">{ownedpunks}</span>{" "}
                </p>
                <p className="paragraph" style={{ textAlign: "justify" }}>
                  {" "}
                  Airdropped NFT amount for Mage Collection:{" "}
                  <span className="answer"> {~~(ownedpunks / 4)}</span>
                </p>
                <p className="paragraph" style={{ textAlign: "justify" }}>
                  {" "}
                  Airdropped NFT amount for Knight Collection:{" "}
                  <span className="answer"> {~~(ownedpunks / 4)}</span>
                </p>
                <br />{" "}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

export const harmonypunks_owned = async () => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  const account = accounts[0];
  const nftamount = await punkcontract.methods
    .balanceOf(account)
    .call();

  console.log(nftamount);

  return nftamount;
};

export default HarmonyPunks;
