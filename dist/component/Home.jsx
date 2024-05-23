"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../css/app.css");
const Board_1 = __importDefault(require("./Board"));
const react_router_dom_1 = require("react-router-dom");
const Home = () => {
    const message = 'hello world';
    console.log(message);
    return (<div className="wrapper">
      <h1>안녕하세요~!</h1>
        <react_router_dom_1.Link to="/userform">작성하기</react_router_dom_1.Link>
      <Board_1.default />
    </div>);
};
exports.default = Home;
