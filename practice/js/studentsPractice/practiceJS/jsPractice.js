

function closingEnterData(){

    document.querySelector(".modal-popup-new-form").classList.remove("show-modal");
}
// function showEntryForm(){
//     document.querySelector(".modal-popup-new-form").classList.add("show-modal");
//     var closing = document.querySelectorAll(".closingFunction-addData");
//     for(var r = 0;r<closing.length;r++){
//         closing[r].addEventListener("click",closingEnterData)
//     }
// }
// var addButton = document.querySelectorAll(".addStudentButton")
// for(var x = 0 ;x<addButton.length;x++){
// addButton[x].addEventListener("click",showEntryForm)
// }

function actionButtonClicked(){
    document.querySelector(".dropdown-List").style.display="block";
}
//document.querySelector(".dropdown-header").addEventListener("click",actionButtonClicked);