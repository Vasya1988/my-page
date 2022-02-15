import classes from './Photoshop.module.css';
import ImageCard from './imageCard/ImageCard';


const Photoshop = (props) => {

    return (
        <div 
            className={ classes.Photoshop }
        >
            {
                props.state.map((card, index) => {
                    return (
                        <ImageCard 
                            key={index}
                            source={card.path}
                        />
                    )
                })
            }
        </div>
        
    )
}
export default Photoshop;