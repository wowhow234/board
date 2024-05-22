import React from 'react';
import '../css/board.css';
import arrayData from "../db/data.json"


const Board = () => {
  console.log("arrayData : ", typeof arrayData);
  console.log(arrayData);

  const dataComments = arrayData.map((item, id) => {
    return (
      <li key={id}>
        <span>no.{item.id}</span>
        <span>{item.dataname}</span>
        <span>{item.datatitle}</span>
        
        <span>
        {item.datacontent}
        </span>
      </li>
    )
  })

  return (
    <div className="boardwrapper">
      <h3>게시글 내용</h3>
      <ul>
        {dataComments}
      </ul>
    </div>
  );
};

export default Board;
