import classes from './Container.module.css';
import Header from '../../components/header/Header';
import Javascript from '../../components/javascript/Javascript';
import About from '../../components/about/About';
import Photoshop from '../../components/photoshop/Photoshop';
import Animation from '../../components/animation/Animation';
import { Routes, Route } from 'react-router-dom';
import MobileMenu from '../../components/mobileMenu/MobileMenu';
import { useState } from 'react';

const Container = () => {

    let [wasChanged, thisChange] = useState(false);
    const burgerActive = () => {
        if(!wasChanged) {
            thisChange(true);
        } else {
            thisChange(false);
        }
        console.log("From Container --> ", wasChanged)
    }

    return (
        <div
            className={ classes.Container }
        >
            <Header 
                burgerActive={ burgerActive }
                wasChanged={ wasChanged }
            />
            <MobileMenu 
                wasChanged={ wasChanged }
            />
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