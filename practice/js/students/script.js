function getActionHtml() {
    return `<div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                Action
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" data-action="edit" href="#">Edit</a>
                <a class="dropdown-item" data-action="details"  href="#">Details</a>
                <a class="dropdown-item" data-action="delete"  href="#">Delete</a>
            </div>
        </div>`;
}

function showEmptyMessage() {
    document.getElementById('student-list').style.display = 'none';
    document.getElementById('empty-students').style.display = 'block';   
}
function showStudentsData() {
    if ($('#student-list').is(':hidden')) {
        document.getElementById('student-list').style.display = 'block';
        document.getElementById('empty-students').style.display = 'none';    
    }
}
function createStudentRow(student) {
    var tr = $(`
        <tr>
            <td class="student-fname">${student.fname}</td>
            <td class="student-lname">${student.lname}</td>
            <td class="student-phoneNumber">${student.phoneNumber}</td>
            <td class="student-actions">${getActionHtml()}</td>
        </tr>
    `);
    return tr;
}
function renderStudent(student) {
    var tbody = document.getElementById('students-rows');
    var row = createStudentRow(student);
    row.on('click', '.dropdown-item', function(event) {
        event.preventDefault();
        var action = $(event.currentTarget).attr('data-action');
        if (action === 'details') {
            openStudentDetails(student);
        }
        else if (action === 'delete') {
            openDeleteConfirm(student, row);
        } else if(action === 'edit') {
            openStudentEdit(student, row);
        }
    });
    tbody.appendChild(row[0]);

}
function renderStudents(data) {
    if (data.length === 0) {
        showEmptyMessage();
        return;
    }
    var tbody = document.getElementById('students-rows');
    tbody.innerHTML = '';
    for(var student of data) {
        renderStudent(student);
    }
}
function fetchStudentsAndRender() {
    conactService.getContacts()
    .then(function(data) {
        renderStudents(data);
    })
}
function showStudentForm() {
    $('#studentModalForm').modal();
    // var fname = $('#firstName');
    // var lname = $("#lastName");
    // var phoneNumber = $('#phoneNumber');
    // var address = $("#address");
    // fname.val('');
    // fname.val('');
    // fname.val('');
    // fname.val('');
    var saveBtn = $('#save-button');
    saveBtn.hide();
    var okbtn = $('#ok-button');
    okbtn.show();
    $('#firstName, #lastName, #phoneNumber, #address').val('');
}
function onSubmitHandler() {
    var fname = $('#firstName');
    var lname = $("#lastName");
    var phoneNumber = $('#phoneNumber');
    var address = $("#address");
    var data = {
        fname: fname.val(),
        lname: lname.val(),
        phoneNumber: phoneNumber.val(),
        address: address.val(),
        id: Date.now()
    };
    if (!data.fname || !data.lname || !data.phoneNumber || !data.address) {
        alert('Please Eneter all details');
        return;
    }
    conactService.createStudent(data)
    .then(function(response) {
        $('#studentModalForm').modal('hide');
        showStudentsData();
        renderStudent(response);
    })
}
function bindOkBtnEvent() {
    var okbtn = $('#ok-button');
    if(!okbtn.attr('is-event-binded')) {
        okbtn.attr('is-event-binded', true);
        okbtn.on('click', function() {
            onSubmitHandler();   
        })
    }
}
function bindAddStudentEvent() {
    $('.add-student-btn').on('click', function(e) {
        showStudentForm();
        bindOkBtnEvent()
    });
}
function init() {
    fetchStudentsAndRender();
    bindAddStudentEvent();
    // 
}

function openStudentDetails(student) {
    $("#studentModalDetails").modal();
    $("#details-fname").html(student.fname)
    $("#details-lname").html(student.lname)
    $("#details-phoneNumber").html(student.phoneNumber)
    $("#details-address").html(student.address)
}

function onDeleteConfirmHandler(student, row) {
    conactService.deleteContact(student.id)
    .then(function() {
        $("#studentModalDelete").modal('hide');
        row.remove();
        var tbody = document.getElementById('students-rows');
        if ($(tbody).find('tr').length === 0) {
            showEmptyMessage();
        }
    });
}
function openDeleteConfirm(student, row) {
    $("#studentModalDelete").modal();
    var deleteBtn = $('#delete-button');
    // if(!deleteBtn.attr('is-event-binded')) {
    //     deleteBtn.attr('is-event-binded', true);
    //     deleteBtn.on('click', function() {
    //         onDeleteConfirmHandler(student, row);   
    //     })
    // }
    deleteBtn.off('click').on('click', function() {
        onDeleteConfirmHandler(student, row);   
    })
}

function onUpdateStudentHandler(student, row) {
    var fname = $('#firstName');
    var lname = $("#lastName");
    var phoneNumber = $('#phoneNumber');
    var address = $("#address");
    var data = {
        fname: fname.val(),
        lname: lname.val(),
        phoneNumber: phoneNumber.val(),
        address: address.val(),
        id: student.id
    };
    if (!data.fname || !data.lname || !data.phoneNumber || !data.address) {
        alert('Please Eneter all details');
        return;
    }
    conactService.updateContact(student.id, data)
    .then(function(response) {
        student.fname = response.fname;
        student.lname = response.lname;
        student.phoneNumber = response.phoneNumber;
        student.address = response.address;
        $('#studentModalForm').modal('hide');
        row.find('.student-fname').html(response.fname);
        row.find('.student-lname').html(response.lname);
        row.find('.student-phoneNumber').html(response.phoneNumber);
    })
}

function openStudentEdit(student, row) {
    $('#studentModalForm').modal();
    var fname = $('#firstName');
    var lname = $("#lastName");
    var phoneNumber = $('#phoneNumber');
    var address = $("#address");
    fname.val(student.fname);
    lname.val(student.lname);
    phoneNumber.val(student.phoneNumber);
    address.val(student.address);
    var saveBtn = $('#save-button');
    saveBtn.show();
    var okbtn = $('#ok-button');
    okbtn.hide();
    saveBtn.off('click').on('click', function() {
        onUpdateStudentHandler(student, row);   
    })
}

$(document).ready(function() {
    init();
});
