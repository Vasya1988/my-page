import classes from './MobileMenu.module.css';
import { NavLink } from 'react-router-dom';

const MobileMenu = (props) => {
    let classActive;
    const navActive = () => {
        if (props.wasChanged) {
            return `${classes.Navlist} ${classes.navActive}`;
        } else if (!props.wasChanged) {
            return `${classes.Navlist}`
        }
    }

    return (
        <nav
            className={navActive()}
        >
            <ul>
                <li><NavLink to='about' >About me</NavLink></li>
                <li><NavLink to='js' >JavaScript</NavLink></li>
                <li><NavLink to='photoshop' >Photoshop</NavLink></li>
                <li><NavLink to='animation' >3d animation</NavLink></li>
            </ul>
        </nav>
    )
}
export default MobileMenu;