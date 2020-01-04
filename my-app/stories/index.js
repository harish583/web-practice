import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../../src/bk-newDropdown';
import '../index.css';
import './index.css';

storiesOf('Dropdown', module)
  .add('Default dropdown', () => (
    <div>
      <Dropdown />
    </div>
  ))
  .add('Multiple Dropdowns', () => {
    return (<div>
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>);
  })