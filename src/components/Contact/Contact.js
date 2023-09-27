import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '../../icons/icons';
import './styles.css'

export default function Contact(props) {
    return (
        <>
            <div className='contact-bg'>
                <div className='contact-container'>
                    <h1 className='contact-container-title'>Contact Me</h1>
                    <a className='contact-tile' href='mailto:email@gmail.com'>
                        <EnvelopeIcon className='contact-icon'></EnvelopeIcon>
                        <p className='contact-text'>email@gmail.com</p>
                    </a>
                    <div className='contact-tile-2'>
                        <PhoneIcon className='contact-icon'></PhoneIcon>
                        <p className='contact-text'>000-000-0000</p>
                    </div>
                </div>
            </div>
        </>
    );
}