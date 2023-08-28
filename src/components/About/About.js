import React from 'react';
import './styles.css'

export default function About() {
    let about = 'I grew up in Fort Myers, FL before making the biggest move in my life to Dallas, TX in 2014. It was here in Dallas where I finished High School and began working towards furthering my education in the Software Engineering industry. I currently work as a Front End Developer. My hobbies consist of rock climbing, coding and playing disc golf. Im also deeply interested in AI and Machine Learning and strive to one day have a career in and contribute to the AI/Machine Learning industry.'
    return (
        <div className='about-bg'>
            <div className='about-container'>
                <h2 className='about-title'>About</h2>
                <div className='about-content-container'>
                    <div>
                        <span className='line-color'>________</span>
                    </div>
                    <div>
                        <p className='about-text'>{about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}