import classes from './Header.module.css';
import Burger from '../../ui/burger/Burger';
import { NavLink } from 'react-router-dom';
import MobileTitle from '../../ui/mobileTitle/MobileTitle';


const Header = (props) => {
    const changeLeftBorderRadius = ()=>{
        if (props.wasChanged) {
            return 0
        }
    }
    return (
        <header
            className={classes.Header}
            style={{
                borderBottomLeftRadius: changeLeftBorderRadius()
            }}
        >
            <nav>
                <ul>
                    <Burger 
                        burgerActive={props.burgerActive}
                    />
                    <MobileTitle />
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