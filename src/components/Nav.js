import {Link} from 'react-router-dom';
function Nav() {
    return(
        <nav>
            <ul>
                <Link to='/about'>
                <li>About</li>
                </Link>

                <Link to='/shop'>
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );    
}
export default Nav;