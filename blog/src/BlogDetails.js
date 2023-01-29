import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {blogs,isPending,stdErr} = useFetch('http://localhost:8000/blogs/'+id);
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading</div>}
            {stdErr && <div>Error .. {stdErr}</div>}
            {
                blogs && (
                    <article>
                        <h2>{blogs.title}</h2>
                        <p>{blogs.author}</p>
                        <p>{blogs.body}</p>
                    </article>
                )
            }
        </div>
     );
}
 
export default BlogDetails;