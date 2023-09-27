import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '../../icons/icons';
import './styles.css'

export default function Contact(props) {
    return (
        <>
            <div className='contact-bg'>
                <div className='contact-container'>
                    <h1 className='contact-container-title'>Contact Me</h1>
                    <div className='contact-tile'>
                        <EnvelopeIcon className='contact-icon'></EnvelopeIcon>
                        <p className='contact-text'><a className='contact-link' href='mailto:email@gmail.com'>email@gmail.com</a></p>
                    </div>
                    <div className='contact-tile'>
                        <PhoneIcon className='contact-icon'></PhoneIcon>
                        <p className='contact-text'><a className='contact-link' href='mailto:email@gmail.com'>email@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}