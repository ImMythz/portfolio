import React from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Contact from '../components/Contact/Contact';

export default function Home() {
    return (
        <main>
            <Navbar></Navbar>
            <HeroBanner></HeroBanner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </main>
    );
}