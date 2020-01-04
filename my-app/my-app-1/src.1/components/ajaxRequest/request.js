
//import ajaxFunctionCall from './index';
import channelResponse from './mock/channel';
import actionResponse from './mock/action';

export function gettingDetails(data){
    // return ajaxFunctionCall({
    //     method:"POST",
    //     url:"https://devio.spotcues.com/channel",
    //     data:data
    // });
    console.log('requdst..data', data);
    return new Promise((resolve, reject) => {
        resolve(actionResponse);
    })
}
// export function createData(data){
//     return ajaxFunctionCall({
//         method:"POST",
//         data:data,
//         url:"http://localhost:3000"
//     });
// }

// export default AllEvents ={
//     gettingDetails:gettingDetails,
//     createData:createData
// }


