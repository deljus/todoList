import React, { Component } from 'react';
import NavbarForm from './NavbarForm';
import TaskList from './TaskListForm';
import AddTaskForm from './AddTaskForm';
import StatusForm from './StatusForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <NavbarForm />
          <div className="container">
              <AddTaskForm/>
              <StatusForm/>
              <TaskList />
          </div>
      </div>
    );
  }
}

export default App;
