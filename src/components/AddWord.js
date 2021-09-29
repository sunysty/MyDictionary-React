import React, { useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDictionaryFB } from "../redux/modules/dictionary";

const AddWord = ({}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const dictionary_index = () => {
    const card = {
      word: word.current.value,
      desc: desc.current.value,
      example: example.current.value,
    };
    dispatch(addDictionaryFB(card));
  };

  //ref선언 : input의 값을 가져오고 초기값 null로 설정
  const word = useRef(null);
  const desc = useRef(null);
  const example = useRef(null);

  console.log(word);
  console.log(desc);
  console.log(example);

  return (
    <Container>
      <Wrap>
        <h1>단어 추가하기</h1>
        <Inputs>
          <div>
            <label for="word">단어</label>
            <input type="text" id="word" name="word" ref={word} />
          </div>
          <div>
            <label for="desc">설명</label>
            <input type="text" id="desc" name="desc" ref={desc} />
          </div>
          <div>
            <label for="example">예시</label>
            <input type="text" id="example" name="example" ref={example} />
          </div>
        </Inputs>
        <Buttons>
          <button
            onClick={() => {
              history.push("/");
              dictionary_index();
            }}
          >
            추가하기
          </button>

          <button
            onClick={() => {
              history.push("/");
            }}
          >
            내 단어장가기
          </button>
        </Buttons>
        <span style={{fontSize: "10px"}}>@sunysty</span>
      </Wrap>
    </Container>
  );
};

export default AddWord;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 25vw;
  height: 80vh;
  border: 1px solid #ccc;
  border-radius: 20px;
  background: #ffb68b;
  color: #fff;

  h1 {
    font-size: 20px;
  }
`;

const Inputs = styled.div`
  width: 60%;
  div {
    padding: 10px;

    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 5px;
      border: #fff 1px solid;
    }
  }
`;

const Buttons = styled.div`
  padding: 30px 10px;
  button {
    margin: 15px;
    background: none;
    border: 1px solid #fff;
    cursor: pointer;
    padding: 5px;
    color: #fff;
    &:hover {
      background: #fff;
      color: #ffb68b;
    }
  }
`;
