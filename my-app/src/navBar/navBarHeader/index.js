import React from 'react';
import './index.css';
import NavBarContent from '../navBarContent/index';
//import fetchRequest , { data } from '../fetchRequests';


export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            detailsStatus:false,
            id:0
        }
    }
    navClicked=(e)=>{
        var x = e.currentTarget.textContent
        // fetch("http://localhost:3000/facebook")
        // .then((response)=>response.json())
        // .then((data)=>{
        //     this.setState({
        //         list:data,
        //         detailsStatus:true
        //     })
        // })

        fetch('http://localhost:3000/'+x)
        .then(function(response) {
            return response.json();
        })
        .then((myJson)=> {
            //console.log(JSON.stringify(myJson));
            this.setState({
                list:myJson,
                detailsStatus:true,
                id:0
            })
        });
    }
    displayContent=()=>{
        var id = this.state.id;
        this.setState({
            id:id+1
        })
    }
    render(){
        var list = this.state.list;
        var detailsStatus = this.state.detailsStatus;
        var id = this.state.id;
        if((id*5)>list.length){
            id=id-1;
            // return null;
        }
        return(
            <div>
                <div>
                    <div className="nav-element" onClick={this.navClicked}>facebook</div>
                    <div className="nav-element" onClick={this.navClicked}>twitter</div>
                    {/* <div className="nav-element" onClick={this.navClicked}>whatsup</div> */}
                    <div className="nav-element" onClick={this.navClicked}>instagram</div>
                    {/* <div className="nav-element" onClick={this.navClicked}>youtube</div>
                    <div className="nav-element" onClick={this.navClicked}>prime</div>
                    <div className="nav-element" onClick={this.navClicked}>paytm</div> */}
                </div>
                {detailsStatus && <div>
                    <div className="next-button" onClick={this.displayContent}>Next</div>
                    {list.map((ele,index)=>{
                        return (((index>=5*id) && (index<5*(id+1)))&&<NavBarContent val={ele}></NavBarContent>)
                    })}
                    
                </div>

                }
            </div>
        )
    }
}