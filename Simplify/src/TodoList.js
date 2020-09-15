import React, { Component } from "react";
import "./index.css"; // 引入 index.css
import "antd/dist/antd.css"; // 2. 引入 antd 的样式
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList,
} from "./store/actionCreators";
// 1. 将 Input 等 antd 的组件引入迁移到 TodoListUI，并引入 TodoListUI
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  handleInputChange(e) {
    // 解决 Antd 中的 bug
    // e.persist();
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleAddItem() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleInputKeyUp(e) {
    // 解决 Antd 中的 bug
    // e.persist();
    if (e.keyCode === 13) {
      this.handleAddItem();
    }
  }

  handleDeleteItem(index) {
    // index.persist();
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        todoList={this.state.todoList}
        handleInputChange={this.handleInputChange}
        handleInputKeyUp={this.handleInputKeyUp}
        handleAddItem={this.handleAddItem}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  async componentDidMount() {
    // let res = await axios.get('https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist')
    // console.log(res.data.todolist);
    // let action = initListAction(res.data.todolist)
    let action = getTodoList()
    store.dispatch(action)
  }
}

export default TodoList;
