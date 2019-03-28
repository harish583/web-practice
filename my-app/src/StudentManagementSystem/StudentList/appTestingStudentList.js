import React from 'react';
import StudentsList from './StudentsList';

export default class AppTestingStudentList extends React.Component{
    render(){
        var students=[
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": "Victor Plains",
                "phone": "010-692-6593 x09125",
              },
              {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
                "address":"Douglas Extension",
                "phone": "1-463-123-4447",
              },
              {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
                "email": "Julianne.OConner@kory.org",
                "address": "Hoeger Mall",
                "phone": "493-170-9623 x156",
              },
              {
                "id": 5,
                "name": "Chelsey Dietrich",
                "username": "Kamren",
                "email": "Lucio_Hettinger@annie.ca",
                "address": "Skiles Walks",
                "phone": "(254)954-1289",
              }
        ]
        return(
            <StudentsList students={students}></StudentsList>
        )
    }
}