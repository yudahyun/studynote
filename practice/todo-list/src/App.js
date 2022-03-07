import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/form';


class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
          왜 안 돼
     </TodoListTemplate>
    );
  }
}

export default App;