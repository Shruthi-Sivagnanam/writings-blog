import { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/useraction";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const LoginPages = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) navigate("/" + userInfo._id);
  }, [navigate, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  return (
    <MainScreen title="Login">
      <Container>
        <Row>
          {loading && <Loading />}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicUsername" required>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{ marginBottom: 10 }}>
              Don't you have account? | <a href="/register">Register</a>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </MainScreen>
  );
};

export default LoginPages;
