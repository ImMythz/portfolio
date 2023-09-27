import React from 'react';
import PythonLogo from '../../images/python.png'
import ReactLogo from '../../images/React-icon.svg'
import JavaScriptLogo from '../../images/JavaScript_logo.svg'
import TypeScriptLogo from '../../images/Typescript_logo.svg'
import AEMlogo from '../../images/AEM-logo.png'
import GitLogo from '../../images/Git-logo.svg'
import AWSLogo from '../../images/AWS_logo.svg'
import DjangoLogo from '../../images/django-logo.svg'
import HTMLCSSLogo from '../../images/HTML-CSS-logo.svg'
import MySQLLogo from '../../images/MySQL-logo.svg'
import MongoDBLogo from '../../images/MongoDB-logo.svg'
import TensorFlowLogo from '../../images/TensorFlow-logo.svg'
import './styles.css'

export default function Skills() {
    return (
        <div className='skills-bg'>
            <div className='skill-title-container'>
                <h1 className='skill-container-title' id='skills'>My Skills</h1>
            </div>
            <div className='skills-container'>
                <div className='skill-tile'>
                    <img src={ReactLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>React</h2>
                </div>
                <div className='skill-tile'>
                    <img src={JavaScriptLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>JavaScript</h2>
                </div>
                <div className='skill-tile'>
                    <img src={PythonLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>Python</h2>
                </div>
                <div className='skill-tile'>
                    <img src={TypeScriptLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>TypeScript</h2>
                </div>
                <div className='skill-tile'>
                    <img src={AEMlogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>AEM</h2>
                </div>
                <div className='skill-tile'>
                    <img src={GitLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>Git</h2>
                </div>
                <div className='skill-tile'>
                    <img src={AWSLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>AWS</h2>
                </div>
                <div className='skill-tile'>
                    <img src={DjangoLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>DJANGO</h2>
                </div>
                <div className='skill-tile'>
                    <img src={HTMLCSSLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>HTML & CSS</h2>
                </div>
                <div className='skill-tile'>
                    <img src={MySQLLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>MySQL</h2>
                </div>
                <div className='skill-tile'>
                    <img src={MongoDBLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>MongoDB</h2>
                </div>
                <div className='skill-tile'>
                    <img src={TensorFlowLogo} alt="python logo" className='skill-img'></img>
                    <h2 className='skill-title'>TensorFlow</h2>
                </div>
            </div>
        </div>
    );
}