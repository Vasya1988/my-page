import classes from './MobileMenu.module.css';

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
                <li><a href='/' >About me</a></li>
                <li><a href='/' >JavaScript</a></li>
                <li><a href='/' >Photoshop</a></li>
                <li><a href='/' >3d animation</a></li>
            </ul>
        </nav>
    )
}
export default MobileMenu;