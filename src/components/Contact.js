import React from 'react';
import {Alert } from 'reactstrap';

const Contact = () =>{
    return(
        <div className='row contact' style={{height:'100vh'}}>
            <h1 style={{fontFamily:'forte'}}>Contact</h1>
            <p style={{fontSize:'1.5rem', fontFamily:'monospace'}}>
                <Alert className='bg-light shadow'><span style={{fontFamily:'forte'}}>Mobile phone: </span> +2349061983150</Alert>
                <Alert className='bg-light shadow'><span style={{fontFamily:'forte'}}>Email: </span> belloshehu1@gmail.com</Alert>
                <Alert className='bg-light shadow'><span style={{fontFamily:'forte'}}>LinkedIn: </span><a href="https://www.linkedin.com/in/bello-shehu-b2834b13b/">click here</a> </Alert>
            </p>  
        </div>
    )
}
export default Contact;