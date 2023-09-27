import React from 'react';
import workImg from '../../images/IE-GPT-Structure.png'
import './styles.css'

export default function Highlight(props) {
    return (
        <>
            <div className='work-highlight-bg'>
                <div className='work-highlight-container'>
                    <h2 className='work-highlight-title' id='work-highlight'>Work Highlight</h2>
                    <div className='work-highlight-content-container'>
                        <div className='work-highlight-content'>
                            <div>
                                <span className='line-color'>________</span>
                            </div>
                            <div>
                                <p className='about-text'>When looking for ways to continue to innovate and create more efficiency for my team, I noticed an avenue in which we could further leverage the power of AI and LLMs.
                                <span className='about-text-alt'>&nbsp;I began working on an internal "ChatGPT" that our internal team could utilize to digest the content of our documents and white papers and then use this tool to ask questions about the data.</span> 
                                &nbsp;This internal tool would all our team to be able to find information faster, provide more efficient results and better understand our own data, while maintaining the privacy of our proprietary data.</p>
                            </div>
                        </div>
                        <div className='work-highlight-content'>
                            <div className='color-block'>
                                <img className='work-highlight-img' src={workImg} alt='code terminal with code'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}