
import ajaxFunctionCall from './index';
//import channelResponse from './mock/channel';
//import actionResponse from './mock/action';
import cbotResponse from './mock/cbot';
 import createTicket from "./mock/createTicketResponse"
// import update from './mock/updateTicketStatus';
// import tracking from "./mock/trackTicket";
//  import fails from './mock/searchTicketFails';
//  import createFail from './mock/createfail';
import response1 from '../ajaxRequest/mock/file1';
import response2 from '../ajaxRequest/mock/file2';
//import TrackSuccess from './mock/trackTicketSuccessResponse';
import fileResponse1 from './mock/file1';

export function gettingDetails(data){
    return ajaxFunctionCall({
        method:"POST",
        url:"https://stagingio.spotcues.com/channel/user/channelbot",
        data:data
    });
    // console.log('..............action/data....channel........');
    // console.log('reqest..data', JSON.stringify(data));
    // return new Promise((resolve, reject) => {
    //     resolve(cbotResponse);
    // })
}
export function newDetails(data){
    return ajaxFunctionCall({
        method:"POST",
        url:"https://stagingio.spotcues.com/bot/action",
        data:data
    });
    // console.log('..............action/data....action.......');
    // console.log('reqest..data', data);
    // return new Promise((resolve, reject) => {
    //     resolve(fileResponse1);
    // })
}
export function response(data){
    // return ajaxFunctionCall({
    //     method:"POST",
    //     url:"https://stagingio.spotcues.com/bot/action",
    //     data:data
    // });
    console.log('..............action/data....action.......');
    console.log('reqest..data', data);
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}


export function fileUpload(data){
    // return ajaxFunctionCall({
    //     method:"POST",
    //     url:"https://stagingio.spotcues.com/bot/action",
    //     data:data
    // });
    console.log('..............action/data....action.......');
    console.log('reqest..data', data);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(response1)
        },2000)
    })
}

