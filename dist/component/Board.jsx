"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../css/board.css");
const axios_1 = __importDefault(require("axios"));
const Board = () => {
    axios_1.default.get("../db/data.json").then((data) => console.log(data.data)).catch((err) => console.log(err));
    // const dataComments = arrayData.map((item, id) => {
    //   return (
    //     <li key={id}>
    //       <span>no.{item.id}</span>
    //       <span>{item.dataname}</span>
    //       <span>{item.datatitle}</span>
    //       <span>
    //       {item.datacontent}
    //       </span>
    //     </li>
    //   )
    // })
    return (<div className="boardwrapper">
      <h3>게시글 내용</h3>
      <ul>
        {/* {dataComments} */}
      </ul>
    </div>);
};
exports.default = Board;
