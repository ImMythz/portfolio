import React from 'react';
import './styles.css'

export default function About() {
    return (
        <div className='about-bg'>
            <div className='about-container'>
                <h2 className='about-title' id='about'>About</h2>
                <div className='about-content-container'>
                    <div>
                        <span className='line-color'>________</span>
                    </div>
                    <div>
                        <p className='about-text'>I grew up in Fort Myers, FL before making the biggest move in my life to Dallas, TX in 2014. It was here in Dallas where I finished High School and began working towards furthering my education in the tech industry.
                        <span className='about-text-alt'>&nbsp;I currently work as a Front End Developer and am the CTO/Co-Founder of a tech startup where I head the engineering and AI aspects of the company.</span> 
                        &nbsp;I have a deep interest in AI/Machine Learning and am always looking to sharpen current skills as well as learn new ones</p>
                    </div>
                </div>
            </div>
        </div>
    );
}