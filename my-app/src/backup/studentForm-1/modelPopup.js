import React from 'react';
import './modelPopup.css';

export default class ModelPopup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // popupContentOpen:true,
            // popupHolder:true
        }
    }
    // OnCrossMark(){
    //     this.setState({
    //         popupContentOpen:!this.state.popupContentOpen
    //     })
    // }
    // onclosingClocked(){
    //     this.setState({
    //         popupContentOpen:false,
    //         popupHolder:false
    //     })
    // }
    render(){
        var {data} =this.props;
        var { studentList } = this.props
        return(
            <div>
                {data.popupHolder &&(<div>
                    <div className="background"></div>
                    <div className="popup-content-holder">
                        <div className="cross-mark" onClick={this.props.onClose()}>X</div>
                        {data.popupOpen && (<div className="popupContent ">
                            {this.props.data.selectedValue==="Details" && 
                                (<div>
                                    <h1>Student Details</h1>
                                    <h2>Name : {studentList.studentRow.name}</h2>
                                    <h2>Phone Number : {studentList.studentRow.phoneNumber}</h2>
                                    <h2>Email : {studentList.studentRow.email}</h2>
                                    <h2>Address : {studentList.studentRow.address}</h2>
                                </div>)
                            }
                            {this.props.data.selectedValue==="Edit" && 
                                (<div>
                                    <h1>Edit Details</h1>
                                    <h2>Name : <input type="text" value={studentList.studentRow.name}></input></h2>
                                    <h2>Phone Number : <input type="text" value={studentList.studentRow.phoneNumber}></input></h2>
                                    <h2>Email : <input type="text" value={studentList.studentRow.email}></input></h2>
                                    <h2>Address : <input type="text" value={studentList.studentRow.address}></input></h2>
                                    <button className="submit-button">Submit</button>
                                </div>)
                            }
                        </div>)}
                        <div className="close-button" onClick={this.props.onClose()}>Close</div>
                    </div>
                    </div>
                )}
            </div>
        )
    }
}