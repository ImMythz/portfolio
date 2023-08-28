import React from 'react';
// import { useEffect } from 'react';
import Vibes from '../../images/VibesExample.png'
import './styles.css'

export default function Projects() {
    return (
        <div className='projects-bg'>
            <div className='project-title-container'>
                <h1 className='project-title'>Projects</h1>
            </div>
            <div className='projects-container'>
                <div className='project-tile'>
                    {/* <div className='project-tile-cover'></div> */}
                    <img src={Vibes} className='project-img' alt='Vibes for Spotify Project Screenshot'></img>
                </div>
            </div>
        </div>
    );
}
