import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import CreateForm from '../../src/CreateStudentForm';


storiesOf('CreateStudentForm', module)
  .add('Default', () => {
    const addStudentSuccess=(student)=>{
      alert("name = "+student.name);
     // CreateStudent(student);
    }
    
    return (
      <CreateForm onSuccess={addStudentSuccess}/>
  )})