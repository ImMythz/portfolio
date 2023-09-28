import React from 'react';
import './styles.css'
import pfp from '../../images/headshot-3-test.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export default function HeroBanner() {
    let dev = '>'
    return (
        <div className='hero-banner-bg'>
            <div className='hero-banner-contents-container'>
                <div className='hero-banner-contents'>
                    <h1 className='hero-title'><span className='hero-title-alt'>{dev}</span> Nate Worley</h1>
                    <p className='hero-alt-text'>Full Stack Software Engineer with a passion for AI/ML</p>
                    <a className='contact-btn' href='mailto:email@gmail.com'>CONTACT ME</a>
                </div>
            </div>
            <div className='pfp-container'>
                <img className='pfp-img' src={pfp} alt='developers face'></img>
                <div className='icon-container'>
                    <div className='icon-div'>
                        <svg height="100" width="25" className='dash-svg'>
                            <line x1="12.5" y1="100" x2="12.5" y2="0" class="icon-dash"></line>
                        </svg>
                    </div>
                    <div className='icon-div'>
                        <a href='./Coding_Resume.pdf' target="_blank" rel="noopener noreferrer" className="icon-style" data-position="bottom" data-tooltip="resume" download="Coding_Resume.pdf">
                            <FontAwesomeIcon icon={faFile} />
                        </a>
                    </div>
                    <div className='icon-div'>
                        <a href="https://www.linkedin.com/in/nathaniel-worley-a21030150/" target="_blank" rel="noopener noreferrer" className="icon-style" data-position="bottom" data-tooltip="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div className='icon-div'>
                        <a href="https://github.com/ImMythz" target="_blank" rel="noopener noreferrer" className="icon-style" data-position="bottom" data-tooltip="github">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

