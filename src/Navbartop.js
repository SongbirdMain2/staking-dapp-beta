import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import title from "./Images/text.png";
import { getCurrentWalletConnected, connectWallet, enable_staking } from "./util/interact.js";

const Navbartop = () => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address);
    setStatus(status);
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed-top
        className="navbarColor"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={title} className="test" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

          {/* <Nav>
            <Nav.Link href="#features" id="ma">
              <img src={title} className="test" />
            </Nav.Link>
          </Nav> */}
          <Nav>
            <Nav.Link>
              {" "}
              <button onClick={enable_staking }  type="button"  className="solbutton"> Enable Staking</button>
            </Nav.Link>
            <Nav.Link className="NavbarText" style={{ color: "yellow" }} id="i">
              <button type="button"
                className="solbutton mx-auto enableEthereumButton"
                id="walletButton"
                onClick={connectWalletPressed}
              >
                {walletAddress.length > 0 ? (
                  "Connected: " +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                ) : (
                  <span>Connect Wallet</span>
                )}
              </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartop;
