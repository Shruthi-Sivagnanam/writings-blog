import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editblog, singleblog } from "../../actions/blogaction";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const Editblog = () => {
  const id1 = window.location.href.split("/");
  const id = id1[id1.length - 2];
  const [err, setErr] = useState("");
  const blogsingle = useSelector((state) => state.blogsingle);
  const { blog, error, loading } = blogsingle;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const blogedit = useSelector((state) => state.blogedit);
  const { success } = blogedit;
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) navigate("/");
    dispatch(singleblog(id));
    setTitle(blog.title);
    setCategory(blog.category);
    setContent(blog.content);
  }, [dispatch, id, navigate, userInfo]);
  const editHandler = (e) => {
    e.preventDefault();
    dispatch(editblog(id, title, category, content));
    if (success) navigate("/" + userInfo._id + "/myblogs/" + id);
  };
  return (
    <MainScreen title="Edit Blog">
      {loading && <Loading />}
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {err && <ErrorMessage variant="danger">{err}</ErrorMessage>}
      {blog && (
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              aria-required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              aria-required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              aria-required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          {content && (
            <Card className="bg-light" style={{ marginBottom: "20px" }}>
              <Card.Header>Blog Preview</Card.Header>
              <Card.Body>
                <MDEditor.Markdown source={content} />
              </Card.Body>
            </Card>
          )}
          <Button
            variant="primary"
            style={{ marginBottom: "10px" }}
            onClick={handleShow}
          >
            Edit
          </Button>
        </Form>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure do you want to edit the blog?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={editHandler}>
            Yes
          </Button>
          <Button variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </MainScreen>
  );
};

export default Editblog;
