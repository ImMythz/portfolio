import React from 'react';
import PythonLogo from '../../images/python.png'
import ReactLogo from '../../images/React-icon.svg'
import JavaScriptLogo from '../../images/JavaScript_logo.svg'
import TypeScriptLogo from '../../images/Typescript_logo.svg'
import AEMlogo from '../../images/AEM-logo.png'
import GitLogo from '../../images/Git-logo.svg'
import AWSLogo from '../../images/AWS_logo.svg'
import DjangoLogo from '../../images/django-logo.svg'
import './styles.css'

export default function Skills() {
    return (
        <div className='skills-bg'>
            <div className='skill-title-container'>
                <h1 className='skill-container-title'>My Skills</h1>
            </div>
            <div className='skills-container'>
                <div className='skill-tile'>
                    <img src={ReactLogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>React</p>
                </div>
                <div className='skill-tile'>
                    <img src={JavaScriptLogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>JavaScript</p>
                </div>
                <div className='skill-tile'>
                    <img src={PythonLogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>Python</p>
                </div>
                <div className='skill-tile'>
                    <img src={TypeScriptLogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>TypeScript</p>
                </div>
                <div className='skill-tile'>
                    <img src={AEMlogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>AEM</p>
                </div>
                <div className='skill-tile'>
                    <img src={GitLogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>Git</p>
                </div>
                <div className='skill-tile'>
                    <img src={AWSLogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>AWS</p>
                </div>
                <div className='skill-tile'>
                    <img src={DjangoLogo} alt="python logo" className='skill-img'></img>
                    <p className='skill-title'>DJANGO</p>
                </div>
            </div>
        </div>
    );
}