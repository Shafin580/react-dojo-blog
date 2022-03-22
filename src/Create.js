import { useState } from "react";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {title, body, author}

    fetch("http://localhost:8000/blogs", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        console.log("New Blog Added!");
        history.push('/');
    });
  }
  return (
    <div className="create">
      <h2>Create A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
        required
        value={body}
        onChange={(event) => setBody(event.target.value)}></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(event) => setAuthor(event.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
