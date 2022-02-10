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

    let state = {
        images: [
            {id: 1, path: require('../../img/photoshop/1.jpg')},
            {id: 2, path: require('../../img/photoshop/2.jpg')},
            {id: 3, path: require('../../img/photoshop/3.jpg')},
            {id: 4, path: require('../../img/photoshop/4.jpg')},
            {id: 5, path: require('../../img/photoshop/5.jpg')},
            {id: 6, path: require('../../img/photoshop/6.jpg')},
            {id: 7, path: require('../../img/photoshop/7.jpg')},
            {id: 8, path: require('../../img/photoshop/8.jpg')}
        ],
        avatar: require('../../img/avatar.png')
    }

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
                    element={<About avatar={state.avatar}/>}
                />
                <Route 
                    path="js"
                    element={<Javascript />}
                />
                <Route 
                    path='photoshop'
                    element={<Photoshop state={state.images}/>}
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