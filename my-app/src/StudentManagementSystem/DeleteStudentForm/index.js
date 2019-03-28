import React from 'react';
import './index.css';
import { AllEvents } from '../services/allHttpRequests';

export default class DeleteStudentForm extends React.Component{
    deleteClickHandler = () => {
        const { student, onDelete } = this.props;
        // DO the API call to delete student on success call onDelete function
        if(onDelete) {
            AllEvents.DeleteStudent(student.id)
            .then(() => {
                onDelete(student);
            });
        }
    }
    render() {
        return(
            <div className="delete-student-form">
                <div>Are you want to delete..?</div>
                <div className="delete-button" onClick={this.deleteClickHandler}>Delete</div>
            </div>
        )
    }
}