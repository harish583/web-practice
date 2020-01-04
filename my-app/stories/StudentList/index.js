import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import StudentsList from '../../src/StudentList';
import { GettingStudentDetails } from '../../src/services/allHttpRequests';
import { EditingStudent } from '../../src/services/allHttpRequests';

storiesOf('StudentsList', module)
  .add('Default StudentsList', () => {
    class StudentListDemo extends Component{
      constructor(props){
        super(props);
        this.state={
          students:[]
        }
      }
      componentDidMount(){
        GettingStudentDetails()
        .then((students) => {
          this.setState({
            students:students
          })
        })
        
      }
    
      onActionHandler = (action, student, index) => {
        if(action ==="DETAILS"){

        }
        if(action ==='EDIT'){
          EditingStudent(student,index);
        }
        if(action ==='DELETE'){

        }
      }
  
      render(){
        return (
          <div>
            <StudentsList 
              students={this.state.students} 
              onAction={this.onActionHandler} 
            />
          </div>
        )
      }
    }
    return (
      <div>
        <StudentListDemo />
      </div>
    )
  })