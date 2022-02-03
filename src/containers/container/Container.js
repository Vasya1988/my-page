import classes from './Container.module.css';
import Header from '../../components/header/Header';
import Javascript from '../../components/javascript/Javascript';
import About from '../../components/about/About';
import Photoshop from '../../components/photoshop/Photoshop';
import Animation from '../../components/animation/Animation';
import { Routes, Route } from 'react-router-dom';
import Navlist from '../../components/navlist/Navlist';

const Container = () => {
    return (
        <div
            className={classes.Container}
        >
            <Header />
            <Navlist />
            <Routes>
                <Route 
                    path="about"
                    element={<About />}
                />
                <Route 
                    path="js"
                    element={<Javascript />}
                />
                <Route 
                    path='photoshop'
                    element={<Photoshop />}
                />
                <Route 
                    path='animation'
                    element={<Animation />}
                />
            </Routes>
            
        </div>
    )
}
export default Container;