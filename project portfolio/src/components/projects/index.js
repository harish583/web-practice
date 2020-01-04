
import  React from 'react';
import './index.css';

export default class ProjectsComponent extends React.Component{
    render(){
        var components = this.props.components;
        return (
            <div className="project-holder">
                {/* <div className="project-name-header">PROJECTS</div> */}
                <div className="project-content">
                    {components.map((component,index)=>
                    <a className="projects-component" href={component.url} target="_blank" key={index}>
                        <img src={components[index].thumbnail} />
                        <div className="text-content">
                            <div className="name-link"><span>{component.name}</span><i className="fas fa-ellipsis-v"></i></div>
                            <div>{component.discription}</div>
                        </div>
                    </a>)}
                </div>
            </div>

        )

    }
}
ProjectsComponent.defaultProps={
    components : [{
        name:"Accordian",
        url:"https://harish583.github.io/web-practice/practice/acordian/with%20label%20and%20checkbox/label-checkbox-dropbox.html",
        discription:"Accordian with label and checkbox",
        thumbnail:"/thumbnails/accrodian-hover.png"
    },
    {
        name:"Accordian",
        url:"https://harish583.github.io/web-practice/practice/acordian/list-types.html",
        discription:"Accordian with hover effect",
        thumbnail:"/thumbnails/accrodian-hover.png"
    },
    {
        name:"calculator",
        url:"https://harish583.github.io/web-practice/practice/js/calculator/calculator.html",
        discription:"calculator",
        thumbnail:"/thumbnails/calculator.png"
    },
    {
        name:"Carousel",
        url:"https://harish583.github.io/web-practice/practice/js/carousel/index.html",
        discription:"multi corosel using opacity and sliding",
        thumbnail:"/thumbnails/multi-corousel.png"
    },
    {
        name:"Carousel",
        url:"https://harish583.github.io/web-practice/practice/js/imageViewer/imageViewer1.html",
        discription:"manual carousel with opacity effect",
        thumbnail:"/thumbnails/manual-carousel.png"
    },
    {
        name:"Carousel",
        url:"https://harish583.github.io/web-practice/practice/js/imageViewer/auto%20slider/autoSlider1.html",
        discription:"manual carousel with sliding effect",
        thumbnail:"/thumbnails/manual-carousel.png"
    },
    {
        name:"Carousel",
        url:"https://harish583.github.io/web-practice/practice/js/imageViewer/opacity%20and%20sliding/slider.html",
        discription:"auto and manual carousel with opacity effect",
        thumbnail:"/thumbnails/manual-carousel.png"
    },
    {
        name:"Local storage",
        url:"https://harish583.github.io/web-practice/practice/js/local%20storage/localStorage2.html",
        discription:"storing the student data locally",
        thumbnail:"/thumbnails/"
    },
    {
        name:"Tabels",
        url:"https://harish583.github.io/web-practice/practice/js/practice/tables/table.html",
        discription:"choose table number oeration and number of counts repeat",
        thumbnail:"/thumbnails/"
    },
    {
        name:"Todo list",
        url:"https://harish583.github.io/web-practice/practice/js/todo/todoPractice1.html",
        discription:"simple Todo list",
        thumbnail:"/thumbnails/"
    },
    // {
    //     name:"",
    //     url:"",
    //     discription:"",
    //     thumbnail:""
    // }
]
}