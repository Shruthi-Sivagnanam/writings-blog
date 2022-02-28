import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";

const MainScreen = ({ title, by, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="pages">
            {title && (
              <>
                <h1 className="headings">{title}</h1>
                {by && <p className="muted">by: {by}</p>}
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
