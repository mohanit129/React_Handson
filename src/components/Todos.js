import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {


  render() {
      return this.props.todo
      s.map((todoItem)=> (
      <TodoItem key={todoItem.id} todo={todoItem}
      delTodo = {this.props.delTodo}
      markComplete={this.props.markComplete}/>)
      );
  }
}

Todos.propTypes = {
 todos : PropTypes.array.isRequired,
 markComplete : PropTypes.func.isRequired,
 delTodo : PropTypes.func.isRequired
}
export default Todos;
