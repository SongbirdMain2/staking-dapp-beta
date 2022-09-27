//the functions pulling data from the SC are located in interact.js and are imported here
import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import {
  availableRewards,
  stakedtokens,
  nfts_owned_not_staked,
  claim_har
} from "./util/interact.js";

const Blockchaindata = () => {
  // const showAccount = document.querySelector('.showAccount');
  function register() {
    // Register functionality here
  }
  function submit() {
    // submit functionality here
  }

  const [arewards, setarewards] = useState("0"); //default message
  const [amountstaked, setamountstaked] = useState("0"); //default message
  const [amountownednotstaked, setamountownednotstaked] = useState("0"); //default message

  useEffect(async () => {
    const arewards = await availableRewards();
    const amountstaked = await stakedtokens();
    const amountownednotstaked = await nfts_owned_not_staked();

    setarewards(arewards);
    setamountstaked(amountstaked);
    setamountownednotstaked(amountownednotstaked);

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
            <h2 className="text1">Staking Info</h2>
            <br />
            <form>
              <div className="row" style={{ textAlign: "center" }}>
                <div className="col-md-12">
                  {" "}
                  <p className="paragraph">
                    NFTs owned:{" "}
                    <span className="answer">
                      {+amountownednotstaked + +amountstaked}
                    </span>
                  </p>
                  <p className="paragraph">
                    available to stake:
                    <span className="answer">{amountownednotstaked} </span>
                  </p>
                  <p className="paragraph">
                    amount of NFTs staked:
                    <span className="answer">{amountstaked}</span>
                  </p>
                  <p className="paragraph">
                    available $HAR rewards:{" "}
                    <span className="answer">{arewards / 1000000000000000000 } </span>
                  </p>
                  <button type="button" onClick={claim_har} className="solbuttoninner" style={{ margin: "auto" }}>
                    Claim $HAR
                  </button>
                  <br />
                </div>
              </div>
            </form>
            <br />
          </Card.Body>
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

export default Blockchaindata;
