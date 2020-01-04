
import  React from 'react';
import './index.css';

export default class SkillsComponent extends React.Component{
    render(){
        var skills = this.props.Allskills;
        debugger;
        return (
            <div className="skills-component">
                {skills.map((skill,index)=>
                    <div className="skill-details">
                        <h1>{skill.cource}</h1>
                        {skill.subName.map((subSkill,id)=>
                            <div className="sub-cources">
                                <img src={subSkill.image} />
                                <div>{subSkill.subname}</div>
                            </div>
                        )}
                    </div>)}
            </div>

        )

    }
}
SkillsComponent.defaultProps={
    Allskills:[
        {
            cource:"HTML",
            subName:[
                {
                    image:"skills//html5.png",
                    subname:"HTML 5"
                }
            ]

        },
        {
            cource:"CSS",
            subName:[
                {
                    image:"skills//css 3.png",
                    subname:"CSS 3"
                },
                {
                    image:"skills/scss.png",
                    subname:"SCSS"
                },
                {
                    image:"skills/bootstrap.png",
                    subname:"Bootstrap"
                }
            ]

        },
        {
            cource:"Javascript",
            subName:[
                {
                    image:"skills/react.png",
                    subname:"React"
                },
                {
                    image:"skills/javascript.png",
                    subname:"Javascript"
                },
                {
                    image:"skills/jquery.png",
                    subname:"jQuery"
                },
                {
                    image:"skills/es6.png",
                    subname:"Es6"
                },
            ]

        },
        {
            cource:"Others",
            subName:[
                {
                    image:"skills/ajax.png",
                    subname:"Ajax"
                },
                {
                    image:"skills/json.jpeg",
                    subname:"Json"
                },
                {
                    image:"skills/github.png",
                    subname:"GitHub"
                },
                {
                    image:"skills/webpack.png",
                    subname:"Webpack"
                },
                // {
                //     image:"",
                //     subname:"Ajax"
                // },
                // {
                //     image:"",
                //     subname:"Ajax"
                // },
                // {
                //     image:"",
                //     subname:"Ajax"
                // },
                // {
                //     image:"",
                //     subname:"Ajax"
                // }
            ]

        },
        
    ]
}