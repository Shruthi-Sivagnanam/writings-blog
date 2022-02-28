import { Button, Container, Row } from "react-bootstrap";
import "./LandingPages.css";

const LandingPages = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="introText">
            <div>
              <h1 className="title">Writings.</h1>
              <h3 className="subtitle">Write and Explore more.</h3>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button className="landingbutton" variant="secondary">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button className="landingbutton" variant="secondary">
                  Sign-up
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPages;
