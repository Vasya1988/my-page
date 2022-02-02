import classes from './Burger.module.css';

const Burger = () => {
    const changeBurger = () => {
        const isBurger = document.querySelector("div");
        isBurger.classList.toggle(classes.Burger_active)
    }

    return (
        <div
            className={classes.Burger}
            onClick={changeBurger}
        >
            <span
                className={`${classes.Burger__line} ${classes.first}`}
            ></span>
            <span
                className={`${classes.Burger__line} ${classes.second}`}
            ></span>
            <span
                className={`${classes.Burger__line} ${classes.third}`}
            ></span>
            <span
                className={`${classes.Burger__line} ${classes.fourth}`}
            ></span>
        </div>
    )
}
export default Burger;