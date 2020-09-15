import axios from 'axios'

// 1. 引入 actionTypes
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION,
} from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index,
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data,
});

// 2. 把 TodoList 文件中 componentDidMount() 的 axios.get() 挪到 actionCreators.js 中
// 3. 在没使用 redux-thunk 之前，我们仅可以在 actionCreators.js 中使用对象，现在我们也可以使用函数了。
export const getTodoList = () => {
  return async (dispatch) => {
    let res = await axios.get(
      "https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist"
    );
    // 8. 直接使用 actionCreators.js 中的 initListAction方法，并 dispatch 该 action
    const action = initListAction(res.data.todolist);
    dispatch(action);
  };
};
