import React from 'react';
import './index.css';
import { AllEvents } from '../../src/services/allHttpRequests';

export default class CreateForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            student:{
                name:"",
                username:"",
                email:"",
                address:""
            },
            emptyStudent:{
                name:"",
                username:"",
                email:"",
                address:""
            }
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
    addingStudent=()=>{
        const { onCreate } = this.props;
        this.state.student.id=Date.now()
        this.setState({
            student:this.state.student
        })
        var student=this.state.student;
        if((student.name =='')|| (student.username =='')|| (student.email =='')|| (student.address =='') ){
            return alert("Enter All the fields");
        }
        
        AllEvents.CreateStudent(student)
        .then((response)=>{
            this.props.onCreate(response)
            
        })
        this.setState({
            student: {
                //...this.state.emptyStudent
                name:"",
                username:"",
                email:"",
                address:"",
                id:''
            }
        })
    }
    render(){
        return (
            <div className="create-edit-form">
                <div>
                    <h2 className="edit-header">Add Student..</h2>
                    <div className="holder">
                        <label>
                            <span>Name : </span>
                            <input className="inputField"  type="text"value={this.state.student.name} placeholder="Name " onChange={(event)=>this.inputName(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label>
                            <span>Username : </span>
                            <input className="inputField" type="text" value={this.state.student.username} placeholder="Username "  onChange={(event)=>this.inputUserName(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label>
                            <span>Email : </span>
                            <input className="inputField" type="text" value={this.state.student.email} placeholder="Email "  onChange={(event)=>this.inputEmail(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label className="textarea-holder">
                            <span>Address : </span>
                            <textarea className="textareaField" value={this.state.student.address} placeholder="Address "  onChange={(event)=>this.inputAddress(event)}></textarea>
                        </label>
                    </div>
                    <div className="submit-button" onClick={()=>this.addingStudent()}>Submit</div>
                </div>   
            </div>
        )
    }
}
