import React from 'react'

export default class ContentHolder extends React.Component{
    render(){
        var { val } = this.props;
        if(val.selectedClass==="Edit"){
            var editContent = "hello welcome to edit";
        }
        if(val.selectedClass==="Details"){
            var DetailsContent = "hello welcome to Details";
        }
        if(val.selectedClass==="Delete"){
            var DeleteContent = "hello welcome to Delete";
        }
        return(
            <div>

                {editContent}
                {DetailsContent}

                {DeleteContent}

            </div>
        )
    }
} 