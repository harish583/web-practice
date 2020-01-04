import React from 'react';


export default class Actions extends React.Component{
    render(){
        const { val } = this.props;
        const { clicking } = this.props;
        const { id } = this.props
    //     var buttons = <ul>
    //     <li className="Actions Actions-Edit">Edit</li>
    //     <li className="Actions Actions-Details">Details</li>
    //     <li className="Actions Actions-Delete">Delete</li>
    // </ul>
    //     var a = this.props.val.list.map((ele,i)=> {
    //         if (Object.values(ele).indexOf('true') > -1) {
    //             return i
    //          }
             
    // //    }
    //     })

          
      //var index = this.props.val.list.findIndex(x => x.pantone_value=="true");
      
    //   console.log(index);
    //     if(index==-1){
    //         this.props.val.list[index].pantone_value=false 
    //     }
        return(
            <div  className="list-element">
                <div className="Action-Button" onClick={(event)=>this.props.clicking(event)} id={id}>
                    Actions</div>
                { !this.props.val.pantone_value &&   <ul>
                        <li className="Actions Actions-Edit">Edit</li>
                        <li className="Actions Actions-Details">Details</li>
                        <li className="Actions Actions-Delete">Delete</li>
                    </ul>
                }
                
            </div>
        )
    }
}