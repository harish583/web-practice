function getContacts() {
    return httpRequest({
        url: 'http://localhost:3000/contacts'
    });
}

function deleteContact(id) {
    return httpRequest({
        method: 'DELETE',
        url: 'http://localhost:3000/contacts/' + id
    });
}

function updateContact(id, data) {
    return httpRequest({
        method: 'PUT',
        data: data,
        url: 'http://localhost:3000/contacts/' + id
    });
}
function createStudent(data) {
    return httpRequest({
        method: 'POST',
        data: data,
        url: 'http://localhost:3000/contacts/'
    });
}
var conactService = {
    getContacts: getContacts,
    deleteContact: deleteContact,
    updateContact: updateContact,
    createStudent: createStudent
}