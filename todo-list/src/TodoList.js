import React, { Component, Fragment } from "react";

import TodoItem from "./TodoItem.js";

import "./style.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleItemDelete(index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }

  handleClick(e) {
    this.setState({
      list: [...this.state.list, this.state.value],
      value: "",
    });
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
    console.log(e.target.value);
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleInput}
          />
          <input type="button" onClick={this.handleClick} value="提交" />
          <ul>{this.getTodoItem()}</ul>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;
