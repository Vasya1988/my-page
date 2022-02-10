import classes from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div
            className={classes.Avatar}
        >
            <img src={props.source}/>
        </div>
    )
}
export default Avatar;