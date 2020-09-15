// 1. 我们不需要 react 中的 Component 了
import React from "react";
import { Input, Button, List } from "antd"; // 1. 引入 antd 的列表

// class TodoListUI extends Component {

// 2. 进行无状态组件定义，然后父组件传递过来的数据，通过 props 获取
const TodoListUI = (props) => {
  // 3. 我们不需要进行 render 了，直接 return 就可以了
  return (
    <div className="todo">
      <div className="todo-title">
        <h1>TodoList</h1>
      </div>
      {/* 4. 使用 Input、Button 组件 */}
      <div className="todo-action">
        <Input
          placeholder="todo"
          className="todo-input"
          value={props.inputValue}
          onChange={props.handleInputChange}
          onKeyUp={props.handleInputKeyUp}
        />
        <Button
          type="primary"
          className="todo-submit"
          onClick={props.handleAddItem}
        >
          提交
        </Button>
      </div>
      {/* 5. 使用 List 组件 */}
      <div className="todo-list">
        <List
          size="large"
          bordered
          dataSource={props.todoList}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleDeleteItem(index);
              }}
            >
              {index + 1} - {item}
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default TodoListUI;
