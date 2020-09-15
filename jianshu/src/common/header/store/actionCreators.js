import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR,
});

const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const getList = () => {
  return async (dispatch) => {
    let res = await axios.get("/api/headerList.json");
    if (res.data.code === 0) {
      const data = res.data.list;
      // 由于数据太多，我们限制数据量为 15 先
    //   data.length = 15;
      dispatch(changeList(data));
    }
  };
};

export const onMouseEnterHot = () => ({
  type: actionTypes.ON_MOUSE_ENTER_HOT,
});

export const onMouseLeaveHot = () => ({
  type: actionTypes.ON_MOUSE_LEAVE_HOT,
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page: page
})