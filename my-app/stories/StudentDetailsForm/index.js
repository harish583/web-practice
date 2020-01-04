import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import DetailsHolder from '../../src/StudentDetails';
import ModelPopup from '../../src/ModelPopup';



storiesOf('DetailsStudentForm', module)
  .add('Default', () => {
    var student={
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address":  "Norberto Crossing"
    }
    const closeClicked = () => {
      alert('close button clicked');
    }
    return(
      <DetailsHolder student={student} onClose={closeClicked}/>
    )
  });