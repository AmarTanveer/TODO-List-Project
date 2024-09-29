# TODO List App

This is a simple **TODO List App** built using **Node.js**, **Express**, **MongoDB**, and **EJS** for templating. The app allows users to add and delete tasks from their to-do list, and it stores the tasks in a MongoDB database. The app also updates dynamically, with a clean user interface.

## Features
- Add tasks to your to-do list
- Delete tasks by checking a checkbox
- Tasks are stored in a MongoDB database
- Clean and simple UI with EJS templating

## Technologies Used
- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database to store tasks
- **EJS**: Templating engine for rendering dynamic HTML
- **CSS**: For basic styling
- **HTML**: Structure for the frontend

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-list-app.git
```

### 2. Navigate to the project directory:

```bash
cd todo-list-app
```

### 3. Install the dependencies:

```bash
npm install
```

### 4. Start MongoDB:

Make sure MongoDB is installed and running on your machine. You can start MongoDB using the following command:

```bash
mongod
```

### 5. Run the application:

```bash
node app.js
```

The server will start at **http://localhost:2000**.

## Usage

1. Open your browser and go to **http://localhost:2000**.
2. Add a task by entering it in the input field and clicking the "+" button.
3. To delete a task, check the box next to it, and it will be removed from the list.

## Project Structure

- **app.js**: The main backend logic that handles adding and deleting tasks.
- **views/list.ejs**: The frontend view rendered with EJS, which displays the list of tasks.
- **public/styles.css**: The CSS file for styling the application.


### Express and MongoDB

**Express** is used to handle HTTP requests, and **MongoDB** is used to store the tasks. Tasks can be added using the form, and deleted when a checkbox is selected.
