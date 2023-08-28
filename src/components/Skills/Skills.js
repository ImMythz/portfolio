import React from 'react';
import Python from '../../images/python.png'
import './styles.css'

export default function Skills() {
    return (
        <div className='skills-bg'>
            <div className='skill-title-container'>
                <h1 className='skill-container-title'>My Skills</h1>
            </div>
            <div className='skills-container'>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>React</p>
                </div>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>JavaScript</p>
                </div>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>Python</p>
                </div>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>TypeScript</p>
                </div>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>AEM</p>
                </div>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>Git</p>
                </div>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>AWS</p>
                </div>
                <div className='skill-tile'>
                    <img src={Python} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>DJANGO</p>
                </div>
            </div>
        </div>
    );
}