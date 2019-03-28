import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../../src/Dropdown';
import '../index.css'; 
import './index.css';

storiesOf('Dropdown', module)
  .add('Default dropdown', () => (
    <div className="dropdown-demo-wrapper">
      <Dropdown />
    </div>
  ))
  .add('Multiple Dropdowns', () => {
      return (<div className="dropdown-demo-wrapper">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>);
  })
  .add('Custom options', () => {
    const options = [{ value: 'v1', text: 'display v1' }, { value: 'v2', text: 'display v2' }]  
    return (
        <div className="dropdown-demo-wrapper">
          <Dropdown options={options}/>
        </div>
      )
    }
  )
  .add('Custom with on select event ', () => {
    const options = [{ value: 'v1', text: 'display v1' }, { value: 'v2', text: 'display v2' },{ value: 'v1', text: 'display v1' }, { value: 'v2', text: 'display v2' }]  
    const onSelectHandler = (value, index) => {
      alert('value: ' + value + ', Index:' + index);
      
    }
    return (
        <div className="dropdown-demo-wrapper">
          <Dropdown options={options} onSelect={onSelectHandler} />
          <Dropdown onSelect={onSelectHandler}>
            This is custom children
          </Dropdown>
        </div>
      )
    }
  )