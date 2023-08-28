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
                    <p>About</p>
                </div>
                <div className='nav-item'>
                    <p>Skills</p>
                </div>
                <div className='nav-item'>
                    <p>Projects</p>
                </div>
            </div>
            <div className='tagline-container'>
                {/* <p>small text here</p> */}
            </div>
        </div>
    );
}