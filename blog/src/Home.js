import { useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

  const handleClick = () => {
    console.log("Hello there!!");
  };
  const clickAndGreet = (name) => {
    console.log("Hello " + name + "!!");
  };
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  const [name, setName] = useState("Joy");
  const [age, setAge] = useState(20);
  const updateData = function () {
    setName("Debdut");
    setAge(21);
  };
  

  const {blogs,stdErr,isPending} = useFetch("http://localhost:8000/blogs");



  return (
    <div className="content">
      <h2
        style={{
          fontFamily: "Ubuntu",
          color: "blue",
        }}
      >
        Homepage
      </h2>
      <form>
        <input
          type={"text"}
          placeholder={"Enter Your Name"}
          id={"name"}
        ></input>
      </form>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => clickAndGreet("Debdut")}>Click and Greet</button>
      {/* Here I have done two examples to show fucntion call on click..
        In the second one, we want to pass the arguement to the function,
        however, if we call the function on onClick, the function will get invoked 
        even without being clicked. That's why an annonymous function is req..
      */}
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={updateData}>Update</button>
      <br />
      <br />
      <br />
      {/* {blogs.map(
        (blog)=>(
            <div className="blog-preview"  key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
            </div>
        )
      )} */}
      { stdErr && <div>Error!!</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Joey")}
        />
      )}
    </div>
  );
};

export default Home;
