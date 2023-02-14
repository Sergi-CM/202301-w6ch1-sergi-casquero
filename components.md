# Data layer

- Task list
  - id
  - name
  - isDone

# Data modifictations

- Load initial task list
- Add a new task
- Delete task
- Toggle isDone of a task

# Components

## App

- Show Layout component

## Layout

- Shows Header component
- Shows Task List component

## Header

- Shows the name of the app within a heading
- Shows list 'Task List' title
- Shows TaskList component

## TaskList

- Receives the task list
- Shows a task card for every task in the task list
- Sends a task to each TaskCard component

## TaskCard

- Reveives the function to toggle isDone in a card
- Receives the function to delete a task
- Receives a task
- Shows a task name within a heading
- Shows a button component to toggle isDone of that task
- Shows a button component to delete that task
- Shows a 'red-ish' background color when the task is not done
- Shows a 'green-ish' background color when the task is done
- Sends "✖️" to button component that deletes a task

## Button

- Receives an icon
- Receives an action
- Shows the received icon within a button
- Executes the received action on click

## CreateForm

- Receives the add task action
- Shows an input for the new task's name with label 'Name'
- Shows a button 'Create' to submit the form
- Executes the received add task action on submit
