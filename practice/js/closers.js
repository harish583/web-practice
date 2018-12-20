function p() {
    for(var i = 0;i <5; i++) {
        console.log(i);
    }
}


// 0, 1, 2, 3, 4

function p1() {
    function x() {
        console.log(i);
    }
    for(var i = 0; i<5; i++) {
        x(i)
    }
}

// 0, 1, 2, 3, 4



function p1() { 
    for(var i = 0; i<5; i++) {
        setTimeout(function() {
            console.log('1');
        }, 2000)
    }
}

output:
d11111


function p1() { 
    for(var i = 0; i<5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 2000)
    }
}


output:
// d55555




function p1() { 
    var i;
    for(i = 0; i<5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 2000)
    }
    console.log(i);
}

// 5d01234
// 5d55555


function p() {

    var i = 10;
    function getI() {
        return i;
    };
    i = 20;
    return {
        getI: getI
    };
}


x = p();

x.getI()
// 20




















