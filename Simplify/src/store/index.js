import { createStore, applyMiddleware, compose } from "redux"; // 3. 我们引用 redux 这个库中的 createStore
import reducer from "./reducer"; // 4. 我们引用 reducer.js 中导出的数据
import thunk from "redux-thunk";

// 3. 使用 redux-devtools-extension 中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

// 4. 使用 applyMiddleware 对此进行扩展
const enhancer = composeEnhancers(applyMiddleware(thunk));

// 5. 我们通过 redux 提供的方法 reducer 来构建一个数据存储仓库
// 如果安装了 Redux 工具，则在这里可以直接使用该工具
let store = createStore(
  reducer,
  enhancer
);

// 6. 我们将 store 导出去
export default store;
