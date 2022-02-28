import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listallblog } from "../../actions/blogaction";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const Myblog = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const blogAll = useSelector((state) => state.blogAll);
  const { blog, error, loading } = blogAll;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) navigate("/");
    dispatch(listallblog());
  }, [dispatch, userInfo, navigate]);
  return (
    <MainScreen title="My Blogs">
      {loading && <Loading />}
      {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
      <Link to={"/" + sessionStorage.getItem("id") + "/myblogs/createblog"}>
        <Button style={{ marginLeft: 10, marginBottom: 20 }}>
          Create Blogs
        </Button>
      </Link>
      {blog ? (
        blog.map(
          (b) =>
            b.user_id === sessionStorage.getItem("id") && (
              <Link
                to={"/" + b.user_id + "/myblogs/" + b._id}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ marginBottom: "10px" }}>
                  <Card.Header>{b.category}</Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>{b.title}</p>
                      <footer
                        className="blockquote-footer"
                        style={{ marginTop: "10px" }}
                      >
                        Created by{" "}
                        <cite title="Source Title">{b.username}</cite>
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Link>
            )
        )
      ) : (
        <p>No blog to display</p>
      )}
    </MainScreen>
  );
};

export default Myblog;
