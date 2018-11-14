function generate(event) {
    var input1 = document.getElementById('first-input');
    var x = input1.value;
    console.log(x);
    // x = 'name';
    alert(p1[x]);


    // var num1 = parseInt(input1.value, 10);
    // console.log(num1);
    // var input2 = document.getElementById('second-input');
    // var num2 = parseInt(input2.value, 10);
    // console.log(num2);
    // console.log(num1 + num2);
    // document.getElementById('ans').innerHTML = num1 + num2;

}

var p1 = {
    name: 'Abc',
    age: 20,
    getName: function() {
        return this.name
    },
    undefined: 10,
    getFullDetails: function() {
        return this.name + '_' + this.age;
    }
}

// var p2 = {
//     '1name': 'Abc',
//     '1age': 20,
//     '1getName': function() {
//         return this.name
//     },
//     '1getFullDetails': function() {
//         return this.name + '_' + this.age;
//     }
// }


// var p2 = {
//     1name: 'Abc',
//     1age: 20,
//     1getName: function() {
//         return this.name
//     },
//     1getFullDetails: function() {
//         return this.name + '_' + this.age;
//     }
// }



