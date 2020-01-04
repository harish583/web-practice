import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index';
import  { gettingDetails }  from './components/ajaxRequest/request';
import HomeComponents from './components/homeComponents/index';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      home:true,
      "vacationCalender":false,
      "payslip":false,
      "moreOptions":false,
      "employeeProfile":false,
      "more":false
    }
  }
  selectedOption=(data)=>{
    if(data === "vacationCalender" ){
      this.setState({
        "vacationCalender":true
      })
    }
    if(data=== "payslip"){
      this.setState({
        "payslip":true
      })
    }
    if(data==="moreOptions"){
      this.setState({
        "moreOptions":true
      })
    }
    if(data==="employeeProfile"){
      this.setState({
        "employeeProfile":true
      })
    }
    if(data === "more" ){
      this.setState({
        "more":true
      })
    }
    if(data === "No" ){
      this.setState({
        no:true
      })
    }
  }
  componentDidMount(){
    var data={
      channelBotId: "5ca5da5005eb4a1ec000cae4",
      _channel: "587c56497c3465c078f6f2df",
      _channelBot: "5ca5da5005eb4a1ec000cae4",
      _user: "5ca4450b3a19091cbd6550ca",
      actionData: [
        {
          "key": "URL",
          "value": "zendesk"
        }
      ]
    }
    gettingDetails(data)
    .then(response=>{
      this.setState({
        data:response
      })
    })
  }
  render() {
    var { home , vacationCalender,payslip,responseText,responseText , more ,no} = this.state;
    var { headerText } = this.props;
    var { homePage } = this.props;
    var { VacationCalender } = this.props;
    var { More } = this.props;
    var { No } = this.props;
    return (
      <div className="App">
        <Header text = {headerText}></Header>
        <div>
          
          <div className="container">
            {home && <HomeComponents 
              elements = { homePage.actions } 
              textcontent ={homePage.textContent} 
              customData = {homePage.customData.data} 
              onSelected={this.selectedOption}>
            </HomeComponents>}
            {vacationCalender && <HomeComponents 
              elements = { VacationCalender.action } 
              textcontent ={VacationCalender.content[0].textContent} 
              customData = {VacationCalender.customData.data}
              onSelected={this.selectedOption}>
            </HomeComponents>}
            {more && <HomeComponents 
              elements = { More.action } 
              textcontent ={ More.content[0].textContent} 
              customData = { More.customData.data}
              onSelected={this.selectedOption}>
            </HomeComponents>}
            {no && <HomeComponents 
              elements = { No.action } 
              textcontent ={ No.content[0].textContent} 
              customData = { No.customData.data}
              onSelected={this.selectedOption}>
            </HomeComponents>}
            
          </div>
        </div>
      </div>
    );
  }
}


App.defaultProps={
  headerText:"HRMS",
  homePage:{
    textContent:"Hi, What are you looking for in HRMS?",
    actions:[
      {"responseText":"vacationCalender"},
      {"responseText":"payslip"},
      {"responseText":"employeeProfile"},
      {"responseText":"moreOptions"}
    ],
    customData:{
      data:[]}
  },
  VacationCalender:{
    action:[
      {"responseText":"more"}
    ],
    content:[
      {"textContent":"3 days"}
    ],
    customData:{
      data:[
        {
          "key":"Public Holiday",
          "value":"4th July 2016, Independece day",
          "type":"NORMAL"
        },
        {
          "key":"Leave",
          "value":"5th - 8th July 2016",
          "type":"NORMAL"
        }
      ]
    }
  },
  More:{
    action:[
      {"responseText":"Yes"},
      {"responseText":"No"},
    ],
    content:[
      {"textContent":"No more holidays, Can I help you with something else?"}
    ],
    customData:{
      data:[
      ]
    }
  },
  No:{
    action:[
    ],
    content:[
      {"textContent":"thankyou so much...."}
    ],
    customData:{
      data:[
      ]
    }
  }

}