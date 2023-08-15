import "./Nav.css";

const Nav = () => {
    return ( 
        <nav className="nav">
            <ul className="nav-menu">
                <li className="item">
                    <a href="/categoria/python">
                        <i className="fa-brands fa-python python"></i>
                    </a>
                </li>
                <li className="item">
                    <a href="/categoria/css">
                        <i className="fa-brands fa-css3-alt css"></i>
                    </a>
                </li>
                <li className="item">
                    <a href="/categoria/javascript">
                        <i className="fa-brands fa-square-js js"></i>
                    </a>
                </li>
                <li className="item">
                    <a href="/categoria/nodejs">
                        <i className="fa-brands fa-node-js node"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
 
export default Nav;