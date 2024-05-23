import React, { useState, useEffect } from 'react';
import '../css/board.css';
import axios from 'axios';


const Board = () => {
  const [board, setBoard] = useState<any>([]);
  
  useEffect(() => {

    axios.get("/db/data.json")
    .then((response) => {
      console.log(response);
      setBoard(response.data);
      console.log("board---->", board)
    })
    .catch((err) => console.log(err));
  },[])
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

  return (
    <div className="boardwrapper">
      <h3>게시글 내용</h3>
            <span>no.{board.id}</span>
    <span>{board.dataname}</span>
    <span>{board.datatitle}</span>
        
    <span>
   {board.datacontent}
  </span>

    </div>
  );
};

export default Board;
