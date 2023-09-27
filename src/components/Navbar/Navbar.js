import React from 'react';
import './styles.css'

export default function Navbar() {
    let logo = '</>'

    return (
        <div className='nav-container'>
            <div className='nav-item-container'>
                <p className='icon-style-alt'>{logo}</p>
            </div>
            <div className='nav-item-container'>
                <div className='nav-item'>
                    <a href='#about' className='nav-link'>About</a>
                </div>
                <div className='nav-item'>
                    <a href='#skills' className='nav-link'>Skills</a>
                </div>
                <div className='nav-item'>
                    <a href='#projects' className='nav-link'>Projects</a>
                </div>
                <div className='nav-item'>
                    <a href='#experience' className='nav-link'>Experience</a>
                </div>
            </div>
            <div className='tagline-container'>
                {/* <p>small text here</p> */}
            </div>
        </div>
    );
}