import "./Nav.css";

const Nav = () => {
    return ( 
        <nav className="nav">
            <ul className="nav-menu">
                <li className="item">
                    <a href="/">
                        <i className="fa-brands fa-python python"></i>
                    </a>
                </li>
                <li className="item">
                    <a href="/">
                        <i className="fa-brands fa-css3-alt css"></i>
                    </a>
                </li>
                <li className="item">
                    <a href="/">
                        <i className="fa-brands fa-square-js js"></i>
                    </a>
                </li>
                <li className="item">
                    <a href="/">
                        <i className="fa-brands fa-node-js node"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
 
export default Nav;