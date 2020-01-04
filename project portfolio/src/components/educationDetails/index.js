
import  React from 'react';
import './index.css';

export default class EducationComponent extends React.Component{
    render(){
        var education = this.props.education;

        return (
            <div className="education-component">
                {education.map((cource,index)=>
                    <div className="study-component">
                        <h3>{cource.study}</h3>
                        <div>{cource.name} - {cource.passedYear}</div>
                        <div>location : {cource.location} , {cource.distict}</div>
                    </div>
                )}
            </div>

        )

    }
}
EducationComponent.defaultProps={
    education:[
        {
            study:"B-Tech",
            name:"JNTUH Manthani",
            location:"Manthani",
            passedYear:"2017",
            distict:"Peddapalli"
        },
        {
            study:"Intermediate",
            name:"Shivani Jr College",
            location:"Hanamkonda",
            passedYear:"2013",
            distict:"Warangal"
        },
        {
            study:"SSC",
            name:"Kakatiya High School",
            location:"Jammikunta",
            passedYear:"2011",
            distict:"Karimnagar"
        },
    ]
}