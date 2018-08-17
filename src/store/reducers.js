import { combineReducers } from 'redux';

// **简单的全局加减法运算，结果永久性保留到全局**  action:{type:'' , payload:666}
function Num(state = 0, action) {
  let { type, payload } = action;
  switch (type) {
    case 'add_num':
      return state + payload;
    default:
      return state;
  }
}

export default combineReducers({ Num });
