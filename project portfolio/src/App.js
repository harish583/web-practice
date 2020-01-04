import React, { Component } from 'react';
import './App.css';
import HeaderLinks from './components/header'
import HomeComponent from './components/Home'
import ProjectsComponent from './components/projects'
import SkillsComponent from './components/skills'
import EducationComponent from './components/educationDetails'
import ContactComponent from './components/contact';
//import ResumeComponent from './components' 

export default class App extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedLink:"ABOUT"
		}
	}
	selected=(text,index)=>{
		debugger;
		this.setState({
			selectedLink:text.toUpperCase()
		})
	}
	headerOpen=()=>{
		var x = document.querySelector(".fa-th");
		x.style.display="none";
		var z = document.querySelectorAll(".header-link");
		for(var s=0;s<z.length;s++){
			z[s].style.display="block";
		}
		var a = document.querySelector(".icons");
		a.style.display="block";
		a.style.float="inherit";
	}
	render(){
		var header = this.props.headerComponents;
		var selected = this.state.selectedLink;
		var resume = this.state.resume;
		return (
			<div className="app-holder">
				<div className="header-holder">
					{header.map((val,index)=>
						<HeaderLinks
							HeaderIndex={index} 
							HeaderText={val}
							key={index}
							selectedLink={this.selected}
							>
						</HeaderLinks>
					)}
					<span className='header-open' onClick={this.headerOpen}><i class="fas fa-th"></i></span>
					<span className="icons">
						<a href="https://github.com/harish583/web-practice/tree/gh-pages" target="_blank"><i className="fab fa-github"></i></a>
					</span>
				</div>
				<div className="content-holder">
					{selected ==="ABOUT" && <HomeComponent />}
					{selected ==="PROJECTS" && <ProjectsComponent />}
					{selected ==="SKILLS" && <SkillsComponent />}
					{selected ==="EDUCATION" && <EducationComponent />}
					{selected ==="CONTACT" && <ContactComponent />}
					{/* {selected ==="RESUME" && <iframe src={resume}></iframe>} */}
				</div>
			</div>
		)
	}
}
App.defaultProps =({
	headerComponents :[
		"About" , "Projects" ,"Skills" , "Education" ,"Contact" , "Resume"
	],
	resume:"https://harish583.github.io/web-practice/resume/resume.html"
	// icons:[
	// 	"fab fa-amazon","fab fa-github","fab fa-facebook","fab fa-twitter"
	// ]
})