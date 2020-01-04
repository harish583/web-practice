import React, { Component } from 'react';
import './App.css';
import HeaderLinks from './components/header'
import HomeComponent from './components/Home'
import SongsComponent from './components/songs'
import VideosComponent from './components/videos'
import ContactUsComponent from './components/contactus'
import GalleryComponent from './components/gallery'

export default class App extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedLink:"HOME"
		}
	}
	selected=(text,index)=>{
		debugger;
		this.setState({
			selectedLink:text.toUpperCase()
		})
	}
	render(){
		var header = this.props.headerComponents;
		var selected = this.state.selectedLink;
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
					<span className="icons">
					{/* {icons.map((icon,index)=>
						<i class={icon} data-id={index} key={index}></i>
					)} */}

						<a href="#" ><i className="fab fa-amazon"></i></a>
						<a href="#" ><i className="fab fa-github"></i></a>
						<a href="#" ><i className="fab fa-facebook"></i></a>
						<a href="#" ><i className="fab fa-twitter"></i></a>
					</span>
				</div>
				<div className="content-holder">
					{selected ==="HOME" && <HomeComponent />}
					{selected ==="GALLERY" && <GalleryComponent />}
					{selected ==="SONGS" && <SongsComponent />}
					{selected ==="VIDEOS" && <VideosComponent />}
					{selected ==="CONTACT US" && <ContactUsComponent />}
				</div>
			</div>
		)
	}
}
App.defaultProps =({
	headerComponents :[
		"Home" , "Songs" ,"Videos" , "Gallery" ,"Contact Us"
	],
	// icons:[
	// 	"fab fa-amazon","fab fa-github","fab fa-facebook","fab fa-twitter"
	// ]
})