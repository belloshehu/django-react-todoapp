import React from 'react';
import image from '../images/passport22.jpg';

const About = () => {

    return (
        <div className="row about" style={{height:'100vh'}}>
            <h1 className='text-dark' style={{fontFamily:'forte'}}>About Shehu Bello</h1>
            <p style={{fontSize: '1.5rem', fontFamily:'monospace'}}
                className=''>
                <img className='rounded-circle' src={image}  alt="shehu bello" />
                Bello Shehu is a fullstack web developer with itermediate experience in Django and React. Before jumping into 
                web development, he was an embedded systems developer and has developed numerous solutions in the area. 
                <br /><br></br>
                He is very passionate about programming and technology as a whole. He has taken many online courses
                through Coursera, Edx, Udacity, Udemy, Microsoft, Cisco, Youtube and many more. 
            </p>
            
        </div>
    )
}

export default About;