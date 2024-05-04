import React from 'react';
import '../css/userform.css';

const Userform = () => {
  return (
    <>
      <form>
        <label>닉네임</label>
        <input type="text" name="nickname" />
        <label>비밀번호</label>
        <input type="password" name="password" />
        <label>제목</label>
        <input type="text" name="title" />
        <label>글 내용</label>
        <textarea name="content"></textarea>
        <button>등록하기</button>
      </form>
    </>
  );
};

export default Userform;
