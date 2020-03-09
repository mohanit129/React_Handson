import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChangeTitle = (e) => this.setState(
        {[e.target.name] : e.target.value });

    onSubmitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title:''});
       }

    render() {
        return (
           <form onSubmit={this.onSubmitTodo} style={{display : 'flex'}} >
              <input type="text" 
              style= {{flex:'10', padding: '5px'}}
              name="title" placeholder="Add Todo
              ..." onChange={this.onChangeTitle}  
              value={this.state.title}
              />
              <input type="submit"         
              value="Submit"
              className = "btn" style= {{flex:'1'}}/>
              </form>
        )
    }
}

export default AddTodo
