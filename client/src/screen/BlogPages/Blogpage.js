import { useEffect, useState } from "react";
import { Badge, Button, Container, Modal } from "react-bootstrap";
import MDEditor from "@uiw/react-md-editor";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { deleteblog, singleblog } from "../../actions/blogaction";
import { Link, useNavigate } from "react-router-dom";

const Blogpage = () => {
  const id1 = window.location.href.split("/");
  const id = id1[id1.length - 1];
  const blogsingle = useSelector((state) => state.blogsingle);
  const { blog, error, loading } = blogsingle;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const blogdelete = useSelector((state) => state.blogdelete);
  const { success } = blogdelete;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    dispatch(singleblog(id));
  }, [dispatch, id]);
  const deleteHandler = () => {
    dispatch(deleteblog(id));
    if (success === true) navigate("/" + userInfo._id + "/myblogs");
  };
  return (
    <Container>
      {loading && <Loading />}
      {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
      {blog && (
        <MainScreen title={blog.title} by={blog.username}>
          <Container>
            <h4>
              <Badge bg="success">{blog.category}</Badge>
            </h4>
            <MDEditor.Markdown source={blog.content} />
          </Container>
          {userInfo && userInfo._id === blog.user_id && (
            <div>
              <Link
                to={"/" + userInfo._id + "/myblog/" + blog._id + "/editblog"}
              >
                <Button variant="warning" style={{ margin: "10px" }}>
                  Edit
                </Button>
              </Link>
              <Button variant="danger" onClick={handleShow}>
                Delete
              </Button>
            </div>
          )}
        </MainScreen>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure do you want to delete the blog?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteHandler}>
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Blogpage;
