import httpRequest from "./httpRequest";



export function gettingData(){
    return httpRequest({
        method:"POST",
        url:"https://reqres.in/api/products",
    })
}