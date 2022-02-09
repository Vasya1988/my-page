import classes from './ImageCard.module.css';

const ImageCard = (props) => {
    
    return (
        <img 
            className={classes.ImageCard}
            src={props.source}
        />
    )
}
export default ImageCard;