import React, { Component } from 'react';
import './index.css';
import StudentsList from '../StudentList/index';
import ModelPopup from '../ModelPopup/index';
import EditHolder from '../EditStudentForm/index';
import DeleteStudentForm from '../DeleteStudentForm/index';
import DetailsHolder  from '../StudentDetails/index';
import { AllEvents } from '../services/allHttpRequests';
import CreateForm from '../CreateStudentForm/index'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            students:[],
            onSelectOption:'',
            student:'',
            selectedRow:''
        }
    }
    componentDidMount(){
        AllEvents.GettingStudentDetails()
        .then((response)=>this.setState({
            students:response
        }))
    }
    onActionHandler = (action, student, index) => {
        this.setState({
            onSelectOption:action,
            student:{
                ...student
            },
            selectedRow:index
        })
     }
    editSuccess=(data)=>{
            this.state.students[this.state.selectedRow] = data;
            this.setState({
                student:'',
                onSelectOption:''
            })
    }
    deleteSuccess=(data)=>{
        var id = this.state.selectedRow;
            var students=this.state.students
            students.splice(id,1)
            this.setState({
                students:students,
                onSelectOption:''
            })
        //})
    }
    popupClose=()=>{
        this.setState({
            onSelectOption:''
        })
    }
    createStudent=()=>{
        this.setState({
            onSelectOption:"CREATE"
        })
    }
    submitStudentForm=(data)=>{
        var students = this.state.students
        students=students.push(data)
        this.setState({
            onSelectOption:"",
            student:''
        })
    }
    render(){
        const { students } = this.state;
        const { onSelectOption } = this.state;
        return (
           <div>
               <StudentsList students={students} onAction={this.onActionHandler} onCreate={this.createStudent}></StudentsList>
               <div>
                    {onSelectOption==="CREATE" &&
                        (
                            <ModelPopup  onClose={this.popupClose}>
                                <CreateForm  onCreate={this.submitStudentForm}></CreateForm>
                            </ModelPopup>
                        )
                    }
                   {onSelectOption==="EDIT" &&
                        (
                            <ModelPopup  onClose={this.popupClose}>
                                <EditHolder student={this.state.student} onSuccess={this.editSuccess}></EditHolder>
                            </ModelPopup>
                        )
                    }
                    {onSelectOption==="DELETE" &&
                         (
                            <ModelPopup  onClose={this.popupClose}>
                                 <DeleteStudentForm student={this.state.student} onDelete={this.deleteSuccess}></DeleteStudentForm>
                            </ModelPopup>
                         )
                     }
                     {onSelectOption==="DETAILS" &&
                          (
                            <ModelPopup  onClose={this.popupClose}>
                              <DetailsHolder student={this.state.student} onClose={this.popupClose}></DetailsHolder>
                            </ModelPopup>
                          )
                      }
               </div>
            </div>
        )
    }
}
