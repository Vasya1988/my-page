import classes from './Container.module.css';
import Header from '../../components/header/Header';
import Javascript from '../../components/javascript/Javascript';
import About from '../../components/about/About';
import Photoshop from '../../components/photoshop/Photoshop';
import Animation from '../../components/animation/Animation';
import { Routes, Route } from 'react-router-dom';
import MobileMenu from '../../components/mobileMenu/MobileMenu';
import { useState } from 'react';
import Welcome from '../../components/welcome/Welcome';

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
        avatar: require('../../img/avatar.png'),
        projects: [
            {id: 1, description: 'Приложение Погода, сделанное на React', href: 'https://vasya1988.github.io/weather-react-app/', path: require('../../img/js-projects/weather.png')},
            {id: 2, description: 'Сайт со всеми телефонами Iphone, сделанный на чистом Javascript', href: 'https://vasya1988.github.io/all_iphones/', path: require('../../img/js-projects/iphone.png')},
            {id: 3, description: 'SPA про Ведьмака, сделанный на чисто Javascript', href: 'https://vasya1988.github.io/the-witcher_/', path: require('../../img/js-projects/witcher.png')},
            {id: 4, description: 'Quiz опрос на чистом Javascript, студенческий проект на курсах Webcademy - Javascript developer', href: 'https://vasya1988.github.io/interview/',  path: require('../../img/js-projects/interview.png')}
        ]
    }

    let [wasChanged, thisChange] = useState(false);

    // Смена иконки меню бургера
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
                    path='my-page'
                    element={<Welcome  />}
                />
                <Route 
                    path="about"
                    element={<About avatar={state.avatar}/>}
                />
                <Route 
                    path="js"
                    element={<Javascript state={state.projects} />}
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