import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("title");
  const [author, setAuthor] = useState("monica");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body , author};
    fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    }).then(() => {
        setIsPending(false);
      console.log("Added");
    //   history.go(-1);
    history.push('/');
    });
  };
  return (
    <div className="create">
      <h2>Add New Blogs!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="debdut">Debdut</option>
          <option value="joey">Joey</option>
          <option value="monica">Monica</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
      <p>{title}</p>
    </div>
  );
};

export default Create;
