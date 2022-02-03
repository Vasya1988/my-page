import classes from './Navlist.module.css';

const Navlist = () => {

    const navOpen = () => {
        
    }
    return (
        <nav
            className={`${classes.Navlist}`}
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
export default Navlist;