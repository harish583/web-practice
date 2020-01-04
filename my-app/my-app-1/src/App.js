import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index';
import  { gettingDetails , newDetails }  from './components/ajaxRequest/request';
import HomeComponents from './components/homeComponents/index';
//import update from './components/ajaxRequest/mock/updateTicketStatus';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
       createTicketResponse:[],
       selectedValue:[],
      ticketResponse:[],
      header:'',
      errorStatus:false,
      gifLogo:true

    }
  }
  selectedOption=(data,id,enteredCustomData,componentId,uploadResponse)=>{
    var latest = this.state.selectedValue;
    // var newcustomData = []
    // var latestNew = []
    // console.log("enteredCustomData "+enteredCustomData )
    this.setState({
      requestOnProgress:true
    })
    latest.push(data);
    //if(data){
      var latestdata={
          channelBotId : this.getQueryVariable("cbid"),
          _channel : this.getQueryVariable("cid"),
          _channelBot : this.getQueryVariable("cbid"),
          _user : this.getQueryVariable("uid"),
          actionData : this.state.createTicketResponse[componentId].result[0].genericFeedData.data[0].actions.data[id].actionData,
        
      }
      //if(enteredCustomData.length){
         latestdata.customData = []
        // enteredCustomData.map((entered,index)=>
        // (newcustomData[index].key = entered.key,
        // newcustomData[index].value = entered.value,
        for(var x =0;x<enteredCustomData.length;x++){
          var key = '',value  = ''
          key = enteredCustomData[x].key
          value = enteredCustomData[x].value;
          // if(enteredCustomData[x].required && value===''){
          //   this.setState({
          //     errorStatus:true
          //   })
          // }
          if(key=="uploads"){
            value=uploadResponse
          }
          var pair ={
           key:key,
           value:value
          }
          if(!(enteredCustomData[x].required && value==='')){
            latestdata.customData.push(pair);
        }
      }
      newDetails(latestdata)
      .then(response=>{
        this.state.ticketResponse.push(response)
        // for(var q in response.result[0].genericFeedData.data[0].customData.data){
        //   if(response.result[0].genericFeedData.data[0].customData.data[q].type=="FILES"){
        //     this.setState({
        //         fileUrlEndPoint : response.result[0].genericFeedData.data[0].customData.data[q].controlData.uploadUrl,
        //         fileKey : response.result[0].genericFeedData.data[0].customData.data[q].controlData.uploadKey
        //     })
        //   }
        // }
        this.setState({
          createTicketResponse:this.state.ticketResponse,
          selectedValue:latest,
          requestOnProgress:false
        })

      })
    //}
    
  }
  getQueryVariable(variable){
    //https://staging.spotcues.com/apps/bots?web=true&uid=5887270117f968004cead511&cbid=5ad4ba8f392b512929587ac3&cid=587c56497c3465c078f6f2df
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       //console.log(vars);
       for (var i=0;i<vars.length;i++) {
           //console.log(vars[i]);
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
   }
  componentDidMount(){
    var data = {
      channelBotId : this.getQueryVariable("cbid"),
      _channel : this.getQueryVariable("cid"),
      _channelBot : this.getQueryVariable("cbid"),
      _user : this.getQueryVariable("uid"),
    }
    gettingDetails(data)
    .then(response=>{
      this.setState({
        header:response,
        gifLogo:false
        
      })
      if(response.success){
        var actionData = response.result[0]._bot.actionData;
        data.actionData = actionData;
        newDetails(data)
        .then(response=>{
          this.state.ticketResponse.push(response)
          this.setState({
            createTicketResponse:this.state.ticketResponse,
            
          })
        })
      }
    })
  }
  render() {
    var createTicketResponse = this.state.createTicketResponse;
    var header = this.state.header;
     var selectedValue = this.state.selectedValue;
     var requestOnProgress = this.state.requestOnProgress;
     var gifLogo = this.state.gifLogo;
     var endpoint = this.state.fileUrlEndPoint;
     var endKey = this.state.fileKey;
    return (
      <div className="App">
        {gifLogo && <img src="https://staging.spotcues.com/images/common/spotcues-loader.gif" className="document-before-loading-gif-file"></img>}
        {header.success && <Header text = {header.result[0]._bot.name}></Header>}
        <div className="app-holder">
          <div className="container">
            {createTicketResponse.map((actionData,index)=>
              <div key={index}>
                <HomeComponents 
                  icon = {actionData.result[0].genericFeedData.icon}
                  elements = { actionData.result[0].genericFeedData.data[0].actions.data } 
                  textcontent ={actionData.result[0].genericFeedData.data} 
                  actionData = {actionData.result[0].genericFeedData.data[0].customData.data} 
                  onSelected={this.selectedOption}
                  componentId={index}
                  // fullResponse={actionData}
                  // endpoint={endpoint}
                  // endKey={endKey}
                  >
                </HomeComponents>
                {(requestOnProgress && createTicketResponse.length-1 === index) && 
                  <div className="request-loading">
                    <span className="loading loading1"></span>
                    <span className="loading loading2"></span>
                    <span className="loading loading3"></span>
                  </div>
                }
                {index !== createTicketResponse.length-1 && <span className="selected-value">{selectedValue[index]}</span>}
              </div>
            )}
          </div> 
        </div>
      </div>
    );
  }
}


