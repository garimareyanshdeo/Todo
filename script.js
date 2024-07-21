document.getElementById('add-todo').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value;

    if (todoText.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = todoText;
        
        li.addEventListener('click', function() {
            li.style.textDecoration = li.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        });
        
        document.getElementById('todo-list').appendChild(li);
        input.value = ''; // Clear the input box after adding the todo
    }
});
