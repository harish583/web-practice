
import  React from 'react';
import './index.css';
import { response, fileUpload ,newDetails}from '../ajaxRequest/request';


export default class HomeComponents extends React.Component{
    constructor(props){
        super(props);
        this.state={
            enteredText:[],
            errorStatus:false,
            statusATTACHMENT:false,
            selectedFiles:[],
            selectedValue:[],
            statusATTACHMENTOpen:false,
            fileUploadResponse:[],
            createResponse:this.props.textcontent
        }
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
    clicked=(e)=>{
        var x = e.target.textContent;
        var id = e.target.dataset.id;
        var componentId = e.target.dataset.value;
        var enteredCustomData = this.state.enteredText;
        console.log(this.state.createResponse);
        // if(enteredCustomData.length===0){
        //     enteredCustomData = this.props.actionData
        // }
        this.setState({
            submitClicked: true,
            id:id
            // errorStatus:true
            
        });
        if(enteredCustomData.length===0){
            enteredCustomData = this.props.actionData;
            for(var z =0;z<enteredCustomData.length;z++){
                enteredCustomData[z].value = ''
            }
        }
        function checking(data) {
            if(data.required){
                return (!(data.value === ''))
            }
            else {
                return true;
            }
        }
        if(enteredCustomData=this.props.actionData){
            var uploadResponse = this.state.fileUploadResponse;
            var a = enteredCustomData.every(checking);
            if(a){
                this.setState({
                    errorStatus:true
                })
                // var response = []
                // for(var x = 0;x<uploadResponse;x++){
                //     response.push(uploadResponse[x].result)
                // }
                //this.props.onSelected(x,id,enteredCustomData,componentId,uploadResponse); 
            }
        }
        var latest = this.state.selectedValue;
        // var newcustomData = []
        // var latestNew = []
        // console.log("enteredCustomData "+enteredCustomData )

        latest.push(x);
        this.setState({
            requestOnProgress:true,
            selectedValue:latest
        })
        //if(data){
        var latestdata={
            channelBotId : this.getQueryVariable("cbid"),
            _channel : this.getQueryVariable("cid"),
            _channelBot : this.getQueryVariable("cbid"),
            _user : this.getQueryVariable("uid"),
            //actionData : this.state.createResponse[componentId].result[0].genericFeedData.data[0].actions.data[id].actionData,
            actionData:[]
        }
        latestdata.customData = []
        for(var x =0;x<enteredCustomData.length;x++){
            var key = '',value  = ''
            key = enteredCustomData[x].key
            value = enteredCustomData[x].value;
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
        for(var q in response.result[0].genericFeedData.data[0].customData.data){
          if(response.result[0].genericFeedData.data[0].customData.data[q].type=="FILES"){
            this.setState({
                fileUrlEndPoint : response.result[0].genericFeedData.data[0].customData.data[q].controlData.uploadUrl,
                fileKey : response.result[0].genericFeedData.data[0].customData.data[q].controlData.uploadKey
            })
          }
        }
        this.setState({
            createTicketResponse:this.state.ticketResponse,
            selectedValue:latest,
            requestOnProgress:false
        })

        })
    //}
    
    }





        // this.setState({
        //     submitClicked: true,
        //     // errorStatus:true
            
        // });
        // if(enteredCustomData.length===0){
        //     enteredCustomData = this.props.actionData;
        //     for(var z =0;z<enteredCustomData.length;z++){
        //         enteredCustomData[z].value = ''
        //     }
        // }
        // function checking(data) {
        //     if(data.required){
        //         return (!(data.value === ''))
        //     }
        //     else {
        //         return true;
        //     }
        // }
        // if(enteredCustomData=this.props.actionData){
        //     var uploadResponse = this.state.fileUploadResponse;
        //     var a = enteredCustomData.every(checking);
        //     if(a){
        //         this.setState({
        //             errorStatus:true
        //         })
        //         // var response = []
        //         // for(var x = 0;x<uploadResponse;x++){
        //         //     response.push(uploadResponse[x].result)
        //         // }
        //         //this.props.onSelected(x,id,enteredCustomData,componentId,uploadResponse); 
        //     }
        // }
    //}
    subject=(e)=>{
        var a = e.target.value;
        var text = this.props.actionData;
        var index = e.target.dataset.id;
        text[index].value = a;
        this.setState({
            enteredText : text,
            errorBorder:""
        })
    

    }
    fileHandler=(e)=>{

        var input = document.querySelector('.input-file');
        var w = e.target.value;
        var x = e.target.files[0].name;
        var y = e.target.files[0].type;
        var z = e.target.files[0].size;
        var url = window.URL.createObjectURL(input.files[0]); 
        var selected = this.state.selectedFiles;
        var endPoint = this.state.fileUrlEndPoint;
        var key = this.state.fileKey;
        // var actionData = this.props;
        // for(var x in actionData){
        //     if(actionData[x].type=="FILES"){
        //         this.setState({
        //             fileUrlEndPoint : actionData[x].controlData.uploadUrl,
        //             fileKey : actionData[x].controlData.uploadKey
        //         })
        //     }
        // }
        var endPoint = this.props.endPoint;
        var key = this.props.fileKey;
        var a ={
            name:x,
            type:y,
            size:z,
            path:w,
            url:url,
            endPoint:endPoint,
            key:key
        }
        selected.push(a);
        this.setState({
            selectedFiles:selected
        })
        // if(y=="image/jpeg" || y=='image/png'){
        //     var newResponse = response1.result;
        // }
        // if(y=='application/pdf'){
        //     var newResponse = response2.result;
        // }
        
        fileUpload(a)
        .then(response=>{
            var res = this.state.fileUploadResponse;
            res.push(response.result)
            this.setState({
                fileUploadResponse:res
            }) 
        })
        // newResponse.fileDetails=a;
        // setTimeout(() => {
        //     response(newResponse)
        // .then(res=>{
        //     console.log(res);
        //     var response = this.state.fileUploadResponse;
        //     response.push(res)
        //     this.setState({
        //         fileUploadResponse:response
        //     })
        // })
        // },3000);   
        
    }
    popupOpen=()=>{
        this.setState({
            statusATTACHMENT:true
        })
        document.body.classList.add('modal-open');
    }
    popupCrossClicked=()=>{
        this.setState({
            statusATTACHMENT:false
        }) 
        document.body.classList.remove('modal-open');
    }
    fileOpen=(e)=>{
        var id = e.currentTarget.dataset.id;
        this.setState({
            statusATTACHMENTOpen:true,
            selectedOpenFileIndex:id
        })
        document.body.classList.add('modal-open');

    }
      




       
    
    fileCrossClicked=()=>{
        this.setState({
            statusATTACHMENTOpen:false
        })
        document.body.classList.remove('modal-open');
    }
    removingFile=(e)=>{
        var id = e.currentTarget.dataset.id;
        var selectedFiles = this.state.selectedFiles;
        selectedFiles.splice(id,1);
        var fileUploadResponse = this.state.fileUploadResponse;
        fileUploadResponse.splice(id,1);
        this.setState({
            selectedFiles:selectedFiles
        })
        response()
        .then(r=>{
            console.log("rrrr "+r)
        })
    }
    render(){
        var { elements , icon , textcontent , actionData , componentId  } = this.props;
        var enteredText = this.state.enteredText;
         var errorStatus = this.state.errorStatus;
         var statusATTACHMENT = this.state.statusATTACHMENT;
         var statusATTACHMENTOpen = this.state.statusATTACHMENTOpen;
         var selectedFiles = this.state.selectedFiles;
         var fileData = '';
        var disable = '';
        var fileUploadResponse = this.state.fileUploadResponse;
        var selectedOpenFileIndex = this.state.selectedOpenFileIndex;
        var ind = this.state.id;
        var selectedValue = this.state.selectedValue;
        
        var input = document.querySelector('.input-file');
        for(var x in actionData){
            if(errorStatus && (actionData[x].type=="TEXTAREA" || actionData[x].type == "INPUT")){
                disable = true;
                break;
            }
            else disable =false;
            // if(actionData[x].type=="FILES"){
            //     this.setState({
            //         fileUrlEndPoint : actionData[x].controlData.uploadUrl,
            //         fileKey : actionData[x].controlData.uploadKey
            //     })
            // }
        }
        return (
            <div className="home-component">
                <div className="avatar-container">
                    <img src={icon} role="presentation" alt="HRMS"></img>
                </div>
                <div className={"content-holder "+(disable ?"disable" :'')}>
                    {textcontent[0].content.map((text)=>    <div  key={text.type}>
                        {text.type === "TEXT" && <div className="text-content-TEXT" style={{fontSize:text.size+"px"}} key={text.textContent}>{text.textContent}</div>}
                        {text.type === "ATTACHMENT" && 
                            <div style={{fontSize:text.size+"px"}}  className="text-content-ATTACHMENT attachment" key={text.textContent} onClick={this.popupOpen}>
                                <img src={text.thumbnailUrl}></img>{text.textContent}
                                
                            </div>
                        }
                        {statusATTACHMENT && text.type === 'ATTACHMENT' &&
                            <div className="popup">
                                <div className="popup-background"></div>
                                <div className="popup-cross-mark" onClick={this.popupCrossClicked}>X</div>
                                <div className="popup-content">
                                    <div className="popup-content-holder">
                                        <iframe src="https://docs.google.com/viewer?url=https://tresorit.com/files/encrypted-link-whitepaper.pdf&embedded=true" className="iframe-holder"></iframe>                
                                    </div>
                                </div>
                            </div>
                        }
                        {text.type === "TITLE" && <div className="text-content-TITLE bolder"  style={{fontSize:text.size+"px"}}  key={text.textContent}>{text.textContent}</div>}
                        </div>
                    )}
                    {actionData.length>0 && <div className="customdata-container">{actionData.map((val,index)=>
                        <div className="customdata-container-holder" key={val.label}>
                            {val.type === "NORMAL" && <>
                                <div className="customdata-container-key"  style={{fontSize:val.size+"px"}}  style={{fontSize:val.size+"px"}}>{val.key}{val.required && <span className="error-message">   * * </span>}</div>
                                <div data-id = {index}  className="customdata-container-value">{val.value}</div>
                                {this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value))) && 
                                    <div className="error-message">{val.r_err_msg}</div>
                                }
                                </>
                            }

                            {val.type === "TEXTAREA" && <>
                                <div className="customdata-container-key"  style={{fontSize:val.size+"px"}} >{val.label}{val.required && <span className="error-message"> * * </span>}</div>
                                    <textarea  data-id = {index}  onChange={this.subject} className={"text-area "+(!(this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value)))) ?" " :"border-color")}></textarea>
                               
                                
                                {/* {!(this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value)))) && 
                                    <textarea  data-id = {index}  onChange={this.subject} className=""></textarea>
                                } */}
                                {/* {this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value))) && 
                                    <>
                                        <textarea  data-id = {index}  onChange={this.subject} className="border-color"></textarea>
                                        <div className="error-message">{val.r_err_msg}</div>
                                    </>
                                } */}
                                {this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value))) && 
                                    <div className="error-message">{val.r_err_msg}</div>
                                }
                                
                            </>
                            }
                            {val.type === "TEXT" && <>
                                <div className="customdata-container-key"  style={{fontSize:val.size+"px"}} >{val.label}{val.required && <span className="error-message"> * * </span>}</div>
                                <div  data-id = {index}  className="customdata-container-value">{val.value}</div>
                                {this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value))) && 
                                    <div className="error-message">{val.r_err_msg}</div>
                                }
                                
                                </>
                            }
                            {val.type === "INPUT" && <>
                                <div className="customdata-container-key"  style={{fontSize:val.size+"px"}} >{val.label}{val.required && <span className="error-message"> * * </span>}</div>
                                <input data-id = {index} data-value={val.required}  onChange={this.subject} type="text" placeholder ={val.controlData.text}></input>
                                {this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value))) && 
                                    <div className="error-message">{val.r_err_msg}</div>
                                }
                                </>
                            }
                            {val.type === "SELECT" && <>
                                <div className="customdata-container-key"  style={{fontSize:val.size+"px"}} >{val.label}{val.required && <span className="error-message"> * * </span>}</div>
                                <select onChange={this.subject} data-id={index} data-value={val.required} >
                                    {val.controlData.options.map((optio)=>
                                    <option  data-id = {index}  key={optio.key}>{optio.key}</option>)}
                                </select>
                                {this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value))) && 
                                    <div className="error-message">{val.r_err_msg}</div>
                                }
                                
                                </>
                            }
                            {val.type === "FILES" && <>
                                <div className="customdata-container-key"  style={{fontSize:val.size+"px"}}  data-value={val.required} >{val.label}</div>
                                {this.state.submitClicked && (!!(val.required && (!enteredText[index] || enteredText[index] && !enteredText[index].value))) && 
                                    <div className="error-message">{val.r_err_msg}</div>
                                }
                                <div className="upload-file-holder">
                                    <div className="dup-button">Upload</div>
                                    {/* <input type="file" size="60px" className="input-file" multiple onChange={this.updateImageDisplay}></input> */}
                                    {/* <div className="preview">
                                        <div>no files</div>
                                    </div> */}
                                    <input type="file" size="60px" className="input-file" multiple onChange={this.fileHandler}></input>
                                    {selectedFiles.map((val,index)=>
                                        <div className="selected-file-holder" key={index}>
                                            {val.type ==="application/pdf" && <img className="selected-files-components" src="https://store-images.s-microsoft.com/image/apps.34961.13510798887621962.47b62c4c-a0c6-4e3c-87bb-509317d9c364.a6354b48-c68a-47fa-b69e-4cb592d42ffc?mode=scale&q=90&h=300&w=300" />}
                                            {val.type ==="image/jpeg" && <img className="selected-files-components" src="https://cdn0.iconfinder.com/data/icons/document-file-types/512/jpeg-512.png" />}
                                            {val.type ==="image/png" && <img className="selected-files-components" src="https://secure.webtoolhub.com/static/resources/icons/set112/f2afb6f7.png" />}
                                            {!(val.type ==="image/png" || val.type ==="image/jpeg" || val.type ==="application/pdf" )&& <img className="selected-files-components" src="" alt="def" />}
                                            <div className="selected-files-components content" onClick={this.fileOpen} data-id={index}>
                                                <div>{val.name}</div>
                                                
                                                <div>{Math.floor(val.size/1000)+"KB"}</div>
                                            </div>
                                            <div className="selected-files-components deleting-button" onClick={this.removingFile} data-id={index}>
                                                <img src="http://pluspng.com/img-png/exit-button-png-button-cancel-close-delete-exit-remove-stop-x-icon-512.png" />
                                            </div>
                                            <div className="loader">
                                                <div className="loader-mover"></div>
                                            </div>
                                            <div className="file-success">
                                                <div className="right-mark"></div>
                                            </div>
                                            {statusATTACHMENTOpen && index==selectedOpenFileIndex && <div className="popup">
                                                <div className="popup-background"></div>
                                                <div className="popup-cross-mark" onClick={this.fileCrossClicked}>X</div>
                                                <div className="popup-content">
                                                    <div className="popup-content-holder">
                                                        {(val.type ==="image/png" || val.type ==="image/jpeg" ) && 
                                                            <img src={fileUploadResponse[selectedOpenFileIndex].previewUrl} className="popup-holder-full-image"></img>
                                                        }
                                                        {val.type ==="application/pdf" && 
                                                            <iframe src={fileUploadResponse[selectedOpenFileIndex].previewUrl} className="iframe-holder" frameBorder="0" allowFullScreen></iframe> 
                                                        }               
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>)}
                                    
                                </div>
                            </>

                            }
                        </div>)}
                    </div>}
                    {elements.map((val,ind)=>{
                        return (
                            <div className="links" 
                                onClick={this.clicked} 
                                key={val.responseText} 
                                data-id ={ind} 
                                data-value={componentId}>
                                {val.normalState}
                            </div>
                        
                        )
                    })}
                </div>
                {ind !== textcontent.length-1 && <span className="selected-value">{selectedValue[ind]}</span>}
              
            </div>

        )

    }
}