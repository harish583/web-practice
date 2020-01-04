import React from 'react';
import DetailsHolder from './details-holder';

export default class AppTestingDetails extends React.Component{
    render(){
        const student ={
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address":  "Ellsworth Summit",
            "phone": "586.493.6943 x140",
            
        }
        return(
            <DetailsHolder student={student}></DetailsHolder>
        )
    }
}