import classes from './Header.module.css';
import Burger from '../../ui/burger/Burger';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header
            className={classes.Header}
        >
            <nav>
                <ul>
                    <Burger />
                    <li><NavLink to='about' >About me</NavLink></li>
                    <li><NavLink to='js' >JavaScript</NavLink></li>
                    <li><NavLink to='photoshop' >Photoshop</NavLink></li>
                    <li><NavLink to='animation' >3d animation</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
 export default Header;