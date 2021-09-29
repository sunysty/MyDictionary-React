import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadDictionaryFB } from "../redux/modules/dictionary";

//리덕스로 dictionary모듈에 있는 데이터값을 받아와서 MyDictionary에서 맵으로 돌려줌
const MyDictionary = ({}) => {
  const history = useHistory();

  //action을 사용하기 위해 dispatch선언
  const dispatch = useDispatch();

  // 파이어베이스에서 값을 불러옴
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);

  //데이터베이스에서 불러온 값
  const dictionary_data = useSelector((state) => state.dictionary.list);
  console.log(dictionary_data);

  return (
    <Container>
      <Wrap>
        <h1>내 단어장</h1>
        {/* dictionary_data가 있을때 map이 돌아감 */}
        <CardWrap>
          {dictionary_data &&
            dictionary_data.map((dictionary, index) => {
              return (
                <Card key={index}>
                  <div>
                    <p className="word">{dictionary.word}</p>
                  </div>
                  <div>
                    <span>설명</span>
                    <p>{dictionary.desc}</p>
                  </div>
                  <div>
                    <span>예시</span>
                    <p className="example">{dictionary.example}</p>
                  </div>
                </Card>
              );
            })}
        </CardWrap>
        <AddButton
          onClick={() => {
            history.push("/add_word");
          }}
        >
          추가하기
        </AddButton>
      </Wrap>
    </Container>
  );
};

export default MyDictionary;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 25vw;
  height: 80vh;
  border: 1px solid #ffb68b;
  border-radius: 20px;
  background: #ffb68b;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    font-size: 20px;
    color: #fff;
  }
`;
const CardWrap = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 90%;
  height: 50vh;
  margin: 0 -10% 0 0;
`;
const Card = styled.div`
  width: 90%;
  margin: 10px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 13px;
  border-radius: 20px;
  background: #fff;

  div {
    border-bottom: #ffb68b dotted 1px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    &:last-child {
      border-bottom: none;
    }

    span {
      display: block;
      min-height: 10px;
      width: 30px;
      color: #ffb68b;
    }
    p {
      display: block;
    }
    .word {
      font-size: 16px;
      font-weight: bold;
    }
    .example {
      color: blue;
    }
  }
`;

const AddButton = styled.button`
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
`;
