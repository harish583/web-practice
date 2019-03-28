
import React from 'react'

export default class EditData extends React.Component{
    render(){
        var { Edit } = this.props;
        return(
            (<div>
                <h1>Edit Details</h1>
                <h2>Name : <input type="text" value={Edit.studentRow.name}></input></h2>
                <h2>Phone Number : <input type="text" value={Edit.studentRow.phoneNumber}></input></h2>
                <h2>Email : <input type="text" value={Edit.studentRow.email}></input></h2>
                <h2>Address : <input type="text" value={Edit.studentRow.address}></input></h2>
                <button className="submit-button">Submit</button>
            </div>)
        )
    }
} 