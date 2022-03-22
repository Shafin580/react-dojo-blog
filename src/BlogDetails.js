import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE"
        }).then(() => {
            console.log("Blog Deleted!");
            history.push('/');
        });
    }

    return <div className="blog-details">
      {isPending && <h2>Loading...</h2>}
      {error && <h3>{error}</h3>}
      {blog && (
      <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
      </article>
      )}
    </div>
}

export default BlogDetails;
