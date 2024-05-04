"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Board_1 = __importDefault(require("./component/Board"));
const Userform_1 = __importDefault(require("./component/Userform"));
function App() {
    const message = 'hello world';
    console.log(message);
    return (<div>
      <h1>안녕하세요~!</h1>
      <Board_1.default />
      <Userform_1.default />
    </div>);
}
exports.default = App;
