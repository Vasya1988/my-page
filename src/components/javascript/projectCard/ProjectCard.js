import classes from './ProjectCard.module.css';

const ProjectCard = (props) => {
    return (
        <img 
            className={ classes.ProjectCard }
            src={ props.path }
        />
    )
}
export default ProjectCard;