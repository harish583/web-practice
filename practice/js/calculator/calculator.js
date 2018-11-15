var isEqPressed = false;
function buttonPress(value, event) {
    console.log(event);
    if(value == '') {
        document.getElementById('text').value = '';
        return;
    }
    console.log('buttonPress.. started');
    if(isEqPressed) {
        console.log('inside.. isEqPressed');
        isEqPressed = false;
        document.getElementById('text').value = '';    
    }
    console.log('outside.. isEqPressed');
    document.getElementById('text').value +=  value;
    console.log('end of the .. buttonPress');  
}
function calculateSum() {
    console.log('calculateSum.. started');
    document.getElementById('text').value = eval(document.getElementById('text').value);
    isEqPressed = true; 
    console.log('end of the .. calculateSum');   
}

function inputKeyPress(event) {
    console.log('inputKeyPress', event, event.keyCode);
    var keyCode = event.keyCode;
    if(keyCode == 13) {
        calculateSum();
        return;
    }
    if(keyCode >= 48 && keyCode <= 57) {
        return;
    }
    if(keyCode == 8 || keyCode == 16 || keyCode == 46 || keyCode == 42 || keyCode == 41 || keyCode == 40 || keyCode == 43 || keyCode == 45 || keyCode == 47) {
        return;
    }
    event.preventDefault();
}
