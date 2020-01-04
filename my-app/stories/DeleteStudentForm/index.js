import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import DeleteStudentForm from '../../src/DeleteStudentForm';
import ModelPopup from '../../src/ModelPopup';
import { DeleteStudent } from '../../src/services/allHttpRequests';


storiesOf('DeleteStudentForm', module)
  .add('Default', () =>{
    const handleCloseClick = () => {
      alert('close clicked');
    }
     const deleteClicked = (student) => {
      alert('deleted');
      // DeleteStudent();
    } 
  return (
    <DeleteStudentForm onDelete={deleteClicked}/>
 )})