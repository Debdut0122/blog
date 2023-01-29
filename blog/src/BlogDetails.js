import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();
    const {blogs,isPending,stdErr} = useFetch('http://localhost:8000/blogs/'+id);
    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/'+blogs.id,{
            method:"DELETE",
        }).then(
            history.push('/')
        )
    }
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
                        <button onClick={handleDelete}>Delete</button>
                    </article>
                )
            }
        </div>
     );
}
 
export default BlogDetails;