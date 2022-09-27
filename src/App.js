import logo from "./logo.svg";
import "./App.css";
import StakeCard from "./harmonypunks";
import HarmonyPunks from "./StakeCard";
import Blockchaindata from "./Blockchaindata";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./Navbartop";
import { Col, Container, Row } from "react-bootstrap";
function App() {
  return (
    <>
      <div className="back">
        <Navbartop />
        <Container>
          <Row>
            {" "}
            <Col md={6}>
              {" "}
              <Blockchaindata />
            </Col>
            <Col md={6}>
              {" "}
              {/* <HarmonyPunks /> */}
              <StakeCard />
            </Col>
          </Row>
        </Container>
       <HarmonyPunks />
        {/* <StakeCard /> */}
      </div>
    </>
  );
}

export default App;
