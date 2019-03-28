import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import CreateEditForm from '../../src/EditStudentForm';
// import ModelPopup from '../../src/ModelPopup';
// import { EditingStudent } from '../../src/services/allHttpRequests';


storiesOf('EditStudentForm', module)
  .add('Default', () => {
    const editAfterSuccess=(student)=>{
      alert("name = "+student.name);
      // EditingStudent(student);
    }
    const handleCloseClick = () => {
      alert('close clicked');
    }
    var student ={
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": "Hoeger Mall",
      "phone": "493-170-9623 x156"
    }
    //var { students } = this.props
    return (
      <CreateEditForm student={student} onSuccess={editAfterSuccess}/>
  )})