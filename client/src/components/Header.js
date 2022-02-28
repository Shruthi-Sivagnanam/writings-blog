import { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/useraction";
const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {}, [userInfo]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Writings.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/allblogs">All blogs</Nav.Link>
            {userInfo ? (
              <Nav.Item>
                <Nav.Link>
                  <Link
                    to={"/" + userInfo._id + "/myblogs"}
                    style={{ textDecoration: "none" }}
                  >
                    My Blogs
                  </Link>
                </Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Link href="/login">Login/Sign-up</Nav.Link>
            )}
            {userInfo && (
              <NavDropdown title={userInfo.username}>
                <NavDropdown.Item href={"/" + userInfo._id}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
