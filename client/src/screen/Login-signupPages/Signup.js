import { useEffect, useState } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../actions/useraction";
import Loading from "../../components/Loading";
import validator from "validator";
import ErrorMessage from "../../components/ErrorMessage";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userSignup;
  useEffect(() => {
    if (userInfo) {
      alert("Registered Successfully!! Log in to explore more!");
      navigate("/login");
    }
  }, [navigate, userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }) &&
      password === cpassword
    )
      dispatch(signup(username, email, password));
  };
  return (
    <MainScreen title="Sign Up">
      <Container>
        <Row>
          {loading && <Loading />}
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="mt-4">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
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
            <Form.Group className="mb-3" controlId="formBasicConfrimPassword">
              <Form.Label>Confirm-Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm-Password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group style={{ marginBottom: 10 }}>
              Already have account? | <a href="/Login">Login</a>
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

export default Signup;
