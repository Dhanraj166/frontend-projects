# Todo List App

A simple and clean Todo List application built using HTML, CSS, and JavaScript.
This app allows users to add tasks, mark them as completed, delete tasks, and stores data using Local Storage so tasks persist after page refresh.

---

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persistent storage using Local Storage
- Simple and modern UI
- Responsive layout

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Browser Local Storage API

---

## Project Structure

todo-list/
│
├── index.html
├── README.md

---

## How to Use

1. Open the index.html file in a web browser
2. Type a task in the input field
3. Click the Add button to add the task
4. Click on a task to mark it as completed
5. Click the Delete button to remove a task
6. Refresh the page and your tasks will remain saved

---

## JavaScript Logic Explanation

The application logic is written in plain JavaScript and works as follows:

### Variables

- inputText: References the input field where the user types a task
- btn: References the Add button
- ul: References the unordered list where tasks are displayed
- todos: An array that stores all todo objects

Each todo object has this structure:
{ text: "Task name", done: false }

---

### saveTodos()

This function saves the current todos array into the browser's Local Storage.

Purpose:
- Converts the todos array into a JSON string
- Stores it under the key "todos"

---

### renderTodos()

This function displays all todos on the screen.

What it does:
- Clears the existing list
- Loops through the todos array
- Creates list items dynamically
- Applies a line-through style if a task is completed
- Adds click events for marking tasks done and deleting tasks

This function is called whenever a task is added, deleted, or updated.

---

### Add Button Click Event

When the Add button is clicked:
- The input value is trimmed to avoid empty spaces
- A new todo object is pushed into the todos array
- The updated list is saved to Local Storage
- The list is re-rendered on the screen

---

### Page Load

When the page loads:
- Todos are fetched from Local Storage
- renderTodos() is called to display saved tasks

---

## Live Demo

(If hosted on GitHub Pages)

https://your-username.github.io/frontend-projects/todo/

---

## Author

Dhanraj S  
Frontend Developer  
GitHub: https://github.com/Dhanraj166

For more information about my project see my Blog,
Dev.to: https://dev.to/dhanraj_s_8fe1023a6e88992/i-built-a-todo-list-app-with-html-css-js-heres-what-i-learned-2aak

---

## License

This project is open-source and free to use.
