
import React from 'react';
import Actions from './actions';

export default class DataContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "members": [
        {
          "id":0,
          "status":false,
          "name": "Molecule Man",
          "age": 29,
          "secretIdentity": "Dan Jukes",
          "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
          ]
        }
      ],
      status:false,
      popupStatus:false,
      editButton:false,
      detailsButton:false,
      deleteButton:false,
      selectedClass:""

    }
  }
  actionClicked(event){
      //var id = event.target.id;
    this.setState({
      status:!this.state.status
    })
  }
    


  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }
      
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside.bind(this));
  }
  handleClickOutside(event) {
    if ((event.target.className==="")) {
      this.setState({
        status:false
      })
    }
  }
  Openpopup(){
    this.setState({
      popupStatus:true
    })
  }
  ClosingPopup(){
    this.setState({
      popupStatus:false
    })
  }
  EditClicked(){
    this.setState({
      editButton:true,
      selectedClass:"Edit"
    })
  }
  DetailsClicked(){
    this.setState({
      detailsButton:true,
      selectedClass:"Details"
    })
  }
  deleteClicked(){
    this.setState({
      deleteButton:true,
      selectedClass:"Delete"
    })
  }

  render(){
    return this.state.members.map((ele)=>{
      return (
        <tr key={ele.name}>
          <td className="values">{ele.name}</td>
          <td className="values">{ele.secretIdentity}</td>
          <td className="values">{ele.age}</td>
          {/* <td className="values Actions" onClick={(event)=>this.actionClicked(event)}>Actions */}
          <Actions 
            data={this.state} 
            clicked={(event)=>this.actionClicked(event)} 
            onEdit={(event)=>this.EditClicked(event)}
            onDetails={(event)=>this.DetailsClicked(event)}
            onDelete={(event)=>this.deleteClicked(event)}
            closingPopup={(event)=>this.ClosingPopup(event)}
          />
          {/* </td> */}
        </tr>
      )
    })
  }
}