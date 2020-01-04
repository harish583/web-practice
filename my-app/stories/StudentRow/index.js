import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import StudentRow from '../../src/StudentRow';
import '../index.css';
import './index.css';


storiesOf('StudentRow', module)
  .add('Default StudentRow', () => (
    <div>
      <StudentRow />
    </div>
  ))
  .add('Multiple StudentRows', () => {
    return (<div>
      <StudentRow />
      <StudentRow />
      <StudentRow />
    </div>);
})
.add('Custom student', () => {
  const student = {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address":  "Victor Plains",
    "phone": "010-692-6593 x09125",
    
  }
  const onSelectHandler = (value, student) => {
    alert('value: ' + value + ', student:' + student);
    
  }
  return (
      <div>
        <StudentRow student={student} onAction={onSelectHandler}/>
      </div>
    )
  }
)
