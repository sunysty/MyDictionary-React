import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dictionary from "./modules/dictionary";
import thunk from "redux-thunk";

const middlewares = [thunk];// 비동기firebase 통신을 위한 미들웨어 redux-thunk
const rootReducer = combineReducers({ dictionary }); //단일스토어, 리듀서를 묶어주기
const enhancer = applyMiddleware(...middlewares);//middleware를 하나하나 풀어해쳐넣어줌


const store = createStore(rootReducer, enhancer); //스토어에 rootReducer를 넣어줌

export default store;
