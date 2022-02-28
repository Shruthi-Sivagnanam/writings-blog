import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listallblog } from "../../actions/blogaction";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

const Allblogs = () => {
  const blogAll = useSelector((state) => state.blogAll);
  const { blog, error, loading } = blogAll;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listallblog());
  }, [dispatch]);
  return (
    <MainScreen title="All blogs">
      {loading && <Loading />}
      {error && <ErrorMessage varient="danger">{error}</ErrorMessage>}
      {blog ? (
        blog.map((b) => (
          <Link
            to={"/allblogs/" + b._id}
            style={{ textDecoration: "none" }}
            key={b._id}
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
                    Created by <cite title="Source Title">{b.username}</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Link>
        ))
      ) : (
        <p>No blogs to display!!</p>
      )}
    </MainScreen>
  );
};

export default Allblogs;
