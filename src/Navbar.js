import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        // useParams();
        <nav className="navbar">
            <h1> Debdut Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;