import classes from './About.module.css';
import Avatar from '../../ui/avatar/Avatar';

const About = (props) => {
    return (
        <div className={classes.About}>
            <Avatar source={props.avatar}/>
            <p>
                <span>First name: <strong>Vasily</strong></span>
                <span>Last name: <strong>Romanov</strong></span>
                <span>Age: <strong> 33</strong></span>
                <span>City: <strong>Pushkino</strong></span>
                <span>Stack: <strong>Javascript, Html, Css, GitHub, React,Photoshop, illustrator, 3d Maya</strong></span>
            </p>

        </div>
        
    )
}
export default About;