
function generate(event) {
    var input = document.getElementById('star-count');
    var num = parseInt(input.value, 10);
    var stars = document.getElementById('stars');
    stars.style.display = 'block';
    stars.innerHTML = '';
    for(var i=1; i<=num; i++) {
        createLine(i);
    }
}

function createLine(n) {
    var stars = document.getElementById('stars');

    var li = document.createElement('li');
    li.classList.add('line');
    stars.appendChild(li);
    
    // Creating elements
    for(var i=0; i<n; i++) {
        var span = document.createElement('span');
        // adding class to span
        span.classList.add('star');
        span.textContent = '*';
        li.appendChild(span);
    }
    
}
