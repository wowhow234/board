"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../css/userform.css");
const Userform = () => {
    return (<>
      <form>
        <label>닉네임</label>
        <input type="text" name="nickname"/>
        <label>비밀번호</label>
        <input type="password" name="password"/>
        <label>제목</label>
        <input type="text" name="title"/>
        <label>글 내용</label>
        <textarea name="content"></textarea>
        <button>등록하기</button>
      </form>
    </>);
};
exports.default = Userform;
