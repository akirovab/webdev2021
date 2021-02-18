let addToDoBtn = document.getElementById('AddToDo');
let toDoContainer = document.getElementById('ToDocontainer');
let inputField = document.getElementById('InputField');

addToDoBtn.addEventListener('click', function() {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    ToDocontainer.appendChild(paragraph);
    InputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        ToDoContainer.removeChild(paragraph);
    })
})