document.addEventListener('DOMContentLoaded', ()=> { 
    const studentsForm = document.querySelector('#student-form') 
    const studentsTable = document.querySelector('#students-table').getElementsByTagName('tbody')[0] 
 
 
 
    function findStudents() { 
        fetch('/students') 
            .then(response => response.json()) 
            .then(students => { 
                studentsTable.innerHTML = '' 
                students.forEach((student, index) => { 
                    const row = document.createElement('tr') 
                    row.innerHTML = ` 
                    <td>${student.name}</td> 
                    <td>${student.surname}</td> 
                    <td>${student.age}</td> 
                    <td>${student.course}</td> 
                    <td>${student.faculty}</td> 
                    <td>${student.subjects}</td> 
                    <td> 
                    <button>edit</button> 
                    <button>delete</button> 
                    </td> 
                    ` 
                    studentsTable.appendChild(row) 
                }) 
            }) 
 
 
    } 
    findStudents() 
})