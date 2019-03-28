import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { AllEvents } from '../../src/services/allHttpRequests';
import StudentsList from '../../src/StudentList';
import DeleteStudentForm from '../../src/DeleteStudentForm'

storiesOf('CreateApp', module)
  .add('Default', () => {
    class App extends Component{
      constructor(props){
        super(props);
        this.state={
          students:[]
        }
      }
      componentDidMount(){
        AllEvents.GettingStudentDetails()
        .then((response)=>{
          this.setState({
            students:response
          })
        })
      }
      onActionHandler(action,student,index){
        // alert(action+","+student+","+index)
        if(action=="DELETE"){
          <DeleteStudentForm index={index} student={student}/>
        }
      }
      render(){
        const { students } = this.state
        return(
          <div>
            <StudentsList 
              students={students}
              onAction={this.onActionHandler} 
            />
          </div>
        )
      }
    } 
    return(
      <App />
    ) 
  })