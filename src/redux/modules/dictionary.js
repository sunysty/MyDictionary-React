// dictionary.js
import {db} from '../../firebase';
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";


// Action Type
const LOAD = "dictionary/LOAD";
const ADD = "dictionary/ADD";

//initialState
const initialState = {
  list: [
    { word: "ㅎ1ㅎ1", desc: "히히를 숫자1을 붙여서 귀엽게 표현하는 방법", example: "ㅎ1ㅎ1 너 좋아" },
    { word: "jmt", desc: "존맛탱구리", example: "스시jmt!" }
  ],
};

// Action Creator : 정보를 store.dispatch()로 store에 보내짐
export const loadDictionary = (dictionary) => {
  return { type: LOAD, dictionary };
};

export const addDictionary = (dictionary) => {
  return { type: ADD, dictionary };
};

//미들웨어 : action과 reducer를 연결해줌
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    let dictionary_list = [];
    dictionary_data.forEach((dictionary) => {
      dictionary_list.push({ ...dictionary.data() });
    })
    console.log(dictionary_list);
    dispatch(loadDictionary(dictionary_list));
  };
};

export const addDictionaryFB = (dictionary_list) => {
  return async function (dispatch) {
    const dictionary_db = await addDoc(collection(db,"dictionary"), dictionary_list);
    console.log(dictionary_list);
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {...state, list: action.dictionary};

    case ADD:
      const new_list = [...state.list, action.dictionary];
      return {...state, list: new_list };

    default:
      return state;
  }
};

export default reducer;
