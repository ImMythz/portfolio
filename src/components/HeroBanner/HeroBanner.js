import React from 'react';
import './styles.css'
import pfp from '../../images/headshot.png'

export default function HeroBanner() {
    return (
        <div className='hero-banner-bg'>
            <div className='hero-banner-contents'>
                <h1>Nate Worley</h1>
                <p>something about Nate blah blah blah</p>
                <button>Contact Me</button>
            </div>
            <img className='pfp-container'src={pfp} alt='developers face'></img>
        </div>
    );
}

