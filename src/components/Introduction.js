import React from 'react';
import { Jumbotron } from 'reactstrap';

const Introduction = () =>{
    return(
        <Jumbotron className='text-left shadow' >
            <h1 className='text-left my-5 text-dark' style={{fontFamily:'forte'}}>
                Create, edit and delete todo items with ease
            </h1>
        </Jumbotron>
    )
}
export default Introduction;