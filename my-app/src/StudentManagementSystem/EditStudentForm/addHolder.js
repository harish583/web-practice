import React from 'react';
import './EditHolder.css'

export default class AddStudentHolder extends React.Component{
    constructor(props){
        super(props);
        this.state={
           student:{ name:'',
                username:'',
                email:'',
                address:''
            },
            popupStatus:true
        }
    }
    inputName(event){
        var Name = event.currentTarget.value
        this.state.student.name=Name
        this.setState({
            student:this.state.student
        })
    }
    inputUserName(event){
        var Name = event.currentTarget.value
        this.state.student.username=Name
        this.setState({
            student:this.state.student
        })
    }
    inputEmail(event){
        var Name = event.currentTarget.value
        this.state.student.email=Name
        this.setState({
            student:this.state.student
        })
    }
    inputAddress(event){
        var Name = event.currentTarget.value
        this.state.student.address=Name
        this.setState({
            student:this.state.student
        })
    }
    // EditSubmitClicked(){
    //     alert("name = "+this.props.student.name+
    //         " ,username = "+this.props.student.username+
    //         " ,phoneNumber = "+ this.props.student.email+
    //         " ,address = "+ this.props.student.address
    //     )
    // }
    // componentDidMount(){
    //     const { student } = this.props;
    //     this.setState({
    //         student:student
    //     })
    // }

    httpObject=()=>{
        this.setState({
            popupStatus:!this.state.popupStatus
        })
        var { student } = this.state;
        var obj={
            url:"https://jsonplaceholder.typicode.com/users/",
            method:"POST",
            data:student,
            credentials: "same-origin",
            headers: {
               "Content-Type": "application/json",

            }, 
        }
        httpRequest({
            url: obj.url,
            method:obj.method,
            data: obj.data
        })
        function httpRequest(obj) {
            return new Promise(function(resolve){
                var http = new XMLHttpRequest();
                http.onload=function(){
                    var response = this.responseText;
                    response = JSON.parse(response);
                    resolve(response);
                }
                http.open(obj.method,obj.url,true);
                http.setRequestHeader("content-type","application/json");
                http.send(JSON.stringify(obj.data));
            });
            // fetch(obj.url,data)
            // .then(function(response) {
            //     return response.json();
            // })
            // .then(function(response) {
            //     return response;
            // });

        }
        
        this.props.onSubmit();
    }


    render(){

        const { student } = this.props;
        return (
            <div>
                { 
                (
                <div>
                    <h2 className="edit-header">Enter Student Details..</h2>
                    <div className="holder">
                        <label>
                            <span>Name : </span>
                            <input className="inputField"  type="text"  placeholder="Name " onChange={(event)=>this.inputName(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label>
                            <span>Username : </span>
                            <input className="inputField" type="text"  placeholder="Username "  onChange={(event)=>this.inputUserName(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label>
                            <span>Email : </span>
                            <input className="inputField" type="text"  placeholder="Email "  onChange={(event)=>this.inputEmail(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label className="textarea-holder">
                            <span>Address : </span>
                            <textarea className="textareaField"  placeholder="Address "  onChange={(event)=>this.inputAddress(event)}></textarea>
                        </label>
                    </div>
                    <div className="submit-button" onClick={()=>this.httpObject}>Submit</div>
                </div>    
                )}
            </div>
        )
    }
}
