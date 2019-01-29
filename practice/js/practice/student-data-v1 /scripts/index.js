function showModal(dom) {
    var modal = document.querySelector('#modal-popup');
    modal.classList.add('show-modal');
    if (dom) {
        var modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '';
        modalContent.appendChild(dom);
    }
}
function hideModal() {
    var modal = document.querySelector('#modal-popup');
    modal.classList.remove('show-modal');
}
function bindModalClose() {
    var close = document.querySelector('.modal-close');
    close.addEventListener('click', function() {
        hideModal();
    })
}

function bindAddButtonEvent() {
    var addBtn = document.querySelector('#add-new-contact');
    addBtn.addEventListener('click', function() {
        // var dom = document.createElement('div');
        // dom.innerHTML = 'hii this is from add button';
        showModal();
    })
}

bindModalClose();
bindAddButtonEvent();
showModal();