import React from 'react';
import './styles.css'

export default function Experience(props) {
    return (
        <>
            <div className='experience-bg'>
                <div className='experience-container'>
                    <div className='experience-title-container'>
                        <h1 className='experience-title' id='experience'>Experience</h1>
                    </div>
                    <div className='experience-tile'>
                        <h2 className='job-title'>Co-Founder / CTO</h2>
                        <p className='job-date'><strong>Havyn</strong> - 05/23 - Current</p>
                        <p className='job-text'>
                            Creating and developing an innovative Real Estate software that leverages AI/Machine Learning to elevate the entire Real Estate industry
                        </p>
                    </div>
                    <div className='experience-tile'>
                        <h2 className='job-title'>Front End Developer</h2>
                        <p className='job-date'><strong>Infinite Electronics</strong> - 12/19 - Current</p>
                        <p className='job-text'>
                            Developed and maintained company web applications across 14 brands utilizing AEM, ASP.NET, Javascript,
                            HTML, and SASS. Streamlined and optimized company web properties to ensure industry standard SEO best
                            practices. Spearheaded the implementation of a company Intranet by utilizing Sharepoint, Material-UI and the
                            ADP API. This allowed employees across the organization to interact and stay connected. The company
                            intranet simultaneously increased employee engagement and company alignment by providing employees a
                            "one stop shop" for tools, contacts, and resources to empower employees to flourish within their job function.
                            Maintained legacy Wordpress, ASP.NET Storefront sites, as well as implemented AEM across company brands
                        </p>
                    </div>
                    <div className='experience-tile'>
                        <h2 className='job-title'>Co-Founder / Lead Software Developer</h2>
                        <p className='job-date'><strong>Vibes for Spotify</strong> - 10/21 - 02/23</p>
                        <p className='job-text'>
                            Creating and developing an innovative tool that revolutionizes the way Spotify users discover, explore, and
                            analyze their Spotify music. Leveraging tools such as Django, React, AWS, Git, and Redux; powered by Python
                            and JavaScript. Developing a song recommendation algorithm, playlist building AI, and song comparison tools
                            to elevate and enable Spotify users music discovery and listening experience.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
