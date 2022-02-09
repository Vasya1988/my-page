import classes from './Photoshop.module.css';
import ImageCard from './imageCard/ImageCard';


const Photoshop = (props) => {

    const images = [
        {id: 1, path: require('../../img/photoshop/1.jpg')},
        {id: 2, path: require('../../img/photoshop/2.jpg')},
        {id: 3, path: require('../../img/photoshop/3.jpg')},
        {id: 4, path: require('../../img/photoshop/4.jpg')},
        {id: 5, path: require('../../img/photoshop/5.jpg')},
        {id: 6, path: require('../../img/photoshop/6.jpg')},
        {id: 7, path: require('../../img/photoshop/7.jpg')},
        {id: 8, path: require('../../img/photoshop/8.jpg')}
    ]

    return (
        <div 
            className={classes.Photoshop}
        >
            {
                images.map((card, index) => {
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