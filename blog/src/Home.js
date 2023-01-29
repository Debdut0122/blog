import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {blogs,stdErr,isPending} = useFetch("http://localhost:8000/blogs");

  return (
    <div className="content">
      { stdErr && <div>Error!!</div>}
      {isPending && <div>Loading...</div>}
      {/* {blogs && <BlogList blogs={blogs} />} */}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Joey")}
        />
      )}
    </div>
  );
};

export default Home;
