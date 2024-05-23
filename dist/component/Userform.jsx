"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("../css/userform.css");
const Userform = () => {
    const [inputs, setInputs] = (0, react_1.useState)({
        nickname: "",
        password: "",
        title: "",
        content: "",
    });
    const { nickname, password, title, content } = inputs; // 비구조화 할당
    const onChangeInput = (e) => {
        const { value, name } = e.target; // e.target 에서 name과 value 만 가져오기
        setInputs(Object.assign(Object.assign({}, inputs), { [name]: value }));
        console.log("onChange되나..", e.target.value);
    };
    (0, react_1.useEffect)(() => {
        console.log("inputs----->", inputs);
    }, [inputs]);
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log("-----제출완료----", inputs);
    };
    return (<>
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
    </>);
};
exports.default = Userform;
