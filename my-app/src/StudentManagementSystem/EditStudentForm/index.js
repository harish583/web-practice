import React from 'react';
import './index.css'
import { AllEvents } from '../services/allHttpRequests';

export default class CreateEditForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
        //    student:{ name:'aa',
        //         username:'bb',
        //         email:'cc',
        //         address:'dd'
        //     },
             status:true
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
    componentDidMount(){
        const { student } = this.props;
        this.setState({
            student:student
        })
    }
    editSubmit(student){
        var student=this.state.student;
        AllEvents.EditingStudent(student.id , student)
        .then((response)=>{
            this.props.onSuccess(response)
        })
    }
    render(){

        const { index , student } = this.props;
        return (
            <div className="create-edit-form">
                {this.state.status &&
                (
                <div>
                    <h2 className="edit-header">Edit Details..</h2>
                    <div className="holder">
                        <label>
                            <span>Name : </span>
                            <input className="inputField"  type="text" value={student.name} placeholder="Name " onChange={(event)=>this.inputName(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label>
                            <span>Username : </span>
                            <input className="inputField" type="text" value={student.username} placeholder="Username "  onChange={(event)=>this.inputUserName(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label>
                            <span>Email : </span>
                            <input className="inputField" type="text" value={student.email} placeholder="Email "  onChange={(event)=>this.inputEmail(event)}></input>
                        </label>
                    </div>
                    <div className="holder">
                        <label className="textarea-holder">
                            <span>Address : </span>
                            <textarea className="textareaField" value={student.address} placeholder="Address "  onChange={(event)=>this.inputAddress(event)}></textarea>
                        </label>
                    </div>
                    <div className="submit-button" onClick={()=>this.editSubmit(student)}>Submit</div>
                </div>    
                )}
            </div>
        )
    }
}
CreateEditForm.defaultProps={
    student:{ 
        name:'aa',
        username:'bb',
        email:'cc',
        address:'dd'
    }
}