import React from 'react';
import './styles.css'

export default function Navbar() {
    const logo = '</>'

    return (
        <div className='nav-container'>
            <div className='nav-item-container'>
                <p className='icon-style-alt'>{logo}</p>
            </div>
            <div className='nav-item-container-middle'>
                {/* <div className='nav-item'>
                    <p className='icon-style-alt'>{logo}</p>
                </div> */}
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
                {/* <p> asd</p> */}
            </div>
        </div>
    );
}