import classes from './Container.module.css';
import Header from '../../components/header/Header';
import Javascript from '../../components/javascript/Javascript';
import About from '../../components/about/About';
import { Routes, Route } from 'react-router-dom';

const Container = () => {
    return (
        <div
            className={classes.Container}
        >
            <Header />
            <Routes>
                <Route exact path="about" component={About} />
                <Route exact path="js" component={Javascript} />
            </Routes>
            
        </div>
    )
}
export default Container;