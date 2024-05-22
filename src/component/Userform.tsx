import React, { useEffect, useState } from 'react';
import '../css/userform.css';

const Userform = () => {
  type Input = {
    nickname: string,
    password: string,
    title: string,
    content : string
  }

  const [inputs, setInputs] = useState({
    nickname: "",
    password: "",
    title: "",
    content : "",
  })

  const { nickname, password, title, content } = inputs; // 비구조화 할당

  const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // e.target 에서 name과 value 만 가져오기
    setInputs({
      ...inputs,
      [name] : value,

    })
    console.log("onChange되나..", e.target.value)
  }

  useEffect(() => {
    console.log("inputs----->", inputs)
  }, [inputs])

  const onSubmitForm = (e : React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log("-----제출완료----", inputs)
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label>닉네임</label>
        <input type="text" name="nickname" value={nickname} onChange={onChangeInput} required/>
        <label>비밀번호</label>
        <input type="password" name="password" value={password} onChange={onChangeInput} required/>
        <label>제목</label>
        <input type="text" name="title" value={title} onChange={onChangeInput} required/>
        <label>글 내용</label>
        <input type="text" name="content" value={content} onChange={onChangeInput} required/>
        <button>등록하기</button>
      </form>
    </>
  );
};

export default Userform;
