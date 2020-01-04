import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import ModelPopup from '../../src/ModelPopup';

storiesOf('ModelPopup', module)
  .add('Default Modal', () => {
    const handleCloseClick = () => {
      alert('close clicked');
    }
    return (
      <div>
        <ModelPopup onClose={handleCloseClick}>
          Content comes here
        </ModelPopup>
      </div>
    );
  })
  .add('Show Modal Conditiontionally', () => {
    class ModalDemo extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isShow: false
        };
      }
      handleModalClose = () => {
        this.setState({
          isShow: false
        });
      }
      toggleModalShow = () => {
        this.setState({
          isShow: !this.state.isShow
        });
      }
      render() {
        const { isShow } = this.state;
        return (<div>
            <button onClick={this.toggleModalShow}>Show Modal</button>
            {
              isShow && <ModelPopup onClose={this.handleModalClose}>
                Content comes here
              </ModelPopup>
            }
          </div>);
      }
    }
    return (
      <div>
        <ModalDemo />
      </div>
    );
  })
  