import React from 'react';
// import { useEffect } from 'react';
import Vibes from '../../images/VibesExample.png'
import Intranet from '../../images/Intranet.png'
import Weather from '../../images/Weather_Dashboard_Screenshot.png'
import StolenCanvas from '../../images/SC_screenshot_1.png'
import TechBlog from '../../images/TB-screenshot-2.png'
import BarScout from '../../images/web-homepage.PNG'
import './styles.css'

export default function Projects() {
    return (
        <div className='projects-bg'>
            <div className='project-section-title-container'>
                <h1 className='project-section-title' id='projects'>Projects</h1>
            </div>
            <div className='projects-container'>
                <div className='project-tile'>
                    <div className='project-tile-cover'>
                        <h2 className='project-title'>Vibes for Spotify</h2>
                        <p className='project-description'>Powerful Spotify analytics software powered by the Spotify API and leveraging proprietary AI song recommendation algorithms</p>
                        <button className='project-btn'>LINK</button>
                    </div>
                    <img src={Vibes} className='project-img' alt='Vibes for Spotify Project Screenshot'></img>
                </div>
                <div className='project-tile'>
                    <div className='project-tile-cover'>
                        <h2 className='project-title'>Company Intranet</h2>
                        <p className='project-description'>Created and implemented a company wide Intranet by utilizing Sharepoint and Material-UI which allows employees to interact and stay connected</p>
                        <button className='project-btn'>LINK</button>
                    </div>
                    <img src={Intranet} className='project-img' alt='Vibes for Spotify Project Screenshot'></img>
                </div>
                <div className='project-tile'>
                    <div className='project-tile-cover'>
                        <h2 className='project-title'>Weather Dashboard</h2>
                        <p className='project-description'>Weather web application that allows you to search for a city and get the daily weather report and 5-day forecast for that city</p>
                        <button className='project-btn'>LINK</button>
                    </div>
                    <img src={Weather} className='project-img' alt='Vibes for Spotify Project Screenshot'></img>
                </div>
                <div className='project-tile'>
                    <div className='project-tile-cover'>
                        <h2 className='project-title'>Stolen Canvas</h2>
                        <p className='project-description'>Full stack E-Commerce webite that is based on the premise of pseudo-selling famous pieces of art as well as MS Paint drawing from the creators of the site</p>
                        <button className='project-btn'>LINK</button>
                    </div>
                    <img src={StolenCanvas} className='project-img' alt='Vibes for Spotify Project Screenshot'></img>
                </div>
                <div className='project-tile'>
                    <div className='project-tile-cover'>
                        <h2 className='project-title'>Tech Blog</h2>
                        <p className='project-description'>Tech Blog web app of a CMS-style blog site. This site allows users to create an account, sign in to an existing account, leave posts, edit posts, delete posts, and comment on posts.</p>
                        <button className='project-btn'>LINK</button>
                    </div>
                    <img src={TechBlog} className='project-img' alt='Vibes for Spotify Project Screenshot'></img>
                </div>
                <div className='project-tile'>
                    <div className='project-tile-cover'>
                        <h2 className='project-title'>BarScout</h2>
                        <p className='project-description'>Web app that allows users to find bars in different cities, states, and counties. You will also be able to locate the bars near the searched location on a map</p>
                        <button className='project-btn'>LINK</button>
                    </div>
                    <img src={BarScout} className='project-img' alt='Vibes for Spotify Project Screenshot'></img>
                </div>
            </div>  
        </div>
    );
}
