
import React from 'react';
import './studentManagemenet.css';
import DropdownHolder from './dropdownHolder';

export default class StudentsData extends React.Component{
    constructor(props){
        super(props);
        this.state=
            {
                "page": 1,
                "per_page": 3,
                "total": 12,
                "total_pages": 4,
                "data": [
                  {
                    "id": 1,
                    "name": "cerulean",
                    "year": 2000,
                    "color": "#98B2D1",
                    "pantone_value": "15-4020"
                  },
                  {
                    "id": 2,
                    "name": "fuchsia rose",
                    "year": 2001,
                    "color": "#C74375",
                    "pantone_value": "17-2031"
                  },
                  {
                    "id": 3,
                    "name": "true red",
                    "year": 2002,
                    "color": "#BF1932",
                    "pantone_value": "19-1664"
                  }
                ]
              
              

        }
    }
    // componentDidMount() {
    //     document.addEventListener('click', this.handleClickOutside.bind(this));
    //   }
          
    //   componentWillUnmount() {
    //     document.removeEventListener('click', this.handleClickOutside.bind(this));
    //   }
      handleClickOutside(event) {
        //if (event.target.classList.indexOf("Action-button") > -1) {
        //     //In the array!
        //     return null;
        // } else {
        //     //Not in the array
        // }

        //if(!event.target.classList==="Action-button"){


        if(true){
            this.state.members.map((item,id)=>{
                var  x1 = {
                    ...this.state.members[id],
                    status:false
                }
        
                var xcopy = [...this.state.members];
                xcopy[id] = x1;
            
                this.setState({
                    members: xcopy
                })
            })
      }
    }
    openAction(event){
        var id = event.target.id;
        console.log(this.state.members[id].status)
        var x1 = {
            ...this.state.members[id],
            status:!this.state.members[id].status
        }
        
        var xcopy = [...this.state.members];
        xcopy[id] = x1;
        
        this.setState({
            members: xcopy
        })

        // this.setState({

        // })
    }
    EditOpen(row,event){
        alert(row.name)
    }
    DetailsOpen(row,event){
        alert(row.name)
    }
    DeleteOpen(row,event){
        alert(row.name)
    }
    render(){
        return(
            <div className="container">
                <h2 className="header">Student Data</h2>
                <div>
                    <div className="row-content"><b>Name</b></div>
                    <div className="row-content"><b>Age</b></div>
                    <div className="row-content"><b>secretIdentity</b></div>
                </div>
                {
                    this.state.members.map((row , id)=>
                        <div key={row.name}>
                            <div className="row-content">{row.name}</div>
                            <div className="row-content">{row.age}</div>
                            <div className="row-content">{row.secretIdentity}</div>
                            <div className="row-content ">
                            <div onClick={(event)=>this.openAction(event)} className="Action-button" id={id}>Actions</div>
                                <DropdownHolder data={row} 
                                    onEdit={(event,row)=>this.EditOpen(event,row)}
                                    onDetails={(event)=>this.DetailsOpen(event)}
                                    onDelete={(event)=>this.DeleteOpen(event)}
                                ></DropdownHolder>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}