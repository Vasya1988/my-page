import classes from './Javascript.module.css';
import ProjectCard from './projectCard/ProjectCard';

const Javascript = (props) => {
    return (
        <div
            className={classes.Js}
        >
            {
                console.log(props.state),
                props.state.map((source, index) => {
                    return (
                        <a
                            href={ source.href }
                            // target='_blank'
                        >
                            <ProjectCard
                            key={ index }
                            path={ source.path }
                        />
                            <span className={classes.Description} >{ source.description}</span>
                        </a>
                    )
            })
            }
        </div>
    )
}
export default Javascript;