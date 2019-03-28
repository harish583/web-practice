
export default function fetchRequest(url){
    fetch(url)
    .then((response)=>response)
    .then((data)=>{
    alert(data)
    return data;
    })
}