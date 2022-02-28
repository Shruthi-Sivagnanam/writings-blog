import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import MDEditor from "@uiw/react-md-editor";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { addblog } from "../../actions/blogaction";

const Createblog = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const blogAdd = useSelector((state) => state.blogAdd);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { loading, success } = blogAdd;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addblog(userInfo._id, userInfo.username, title, category, content)
    );
  };
  useEffect(() => {
    if (success) {
      alert("Blog added successfully");
      navigate("/" + userInfo._id + "/myblogs");
    }
  }, [userInfo, success, navigate]);
  return (
    <MainScreen title="Create Blog">
      <Container>
        {loading && <Loading />}
        {success === false && (
          <ErrorMessage variant="danger">
            Blog not added! Try again!
          </ErrorMessage>
        )}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title of the blog"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              aria-required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the category of the blog"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Start your blog...."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              aria-required
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
            type="submit"
            style={{ marginBottom: "10px" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </MainScreen>
  );
};

export default Createblog;
