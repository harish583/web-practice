import React from 'react'

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:"fname 1 ",
            lname:"lname 1 ",
            email:"123@gmail.com"
        }
    }
    render(){
        return(
            <div className="list-holder">
                <div>
                    <b>FNAME : </b>
                    <span>{this.state.fname}</span>
                </div>
                <div>
                    <b>LNAME : </b>
                    <span>{this.state.lname}</span>
                </div>
                <div>
                    <b>GMAIL : </b>
                    <span>{this.state.email}</span>
                </div>
            </div>
        )
    }
}

export default Content