import React, { useState, useEffect } from 'react';
import '../css/board.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


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

  interface Board {
    id: number;
    dataname: string;
    datatitle: string;
    datacontent: string;
  }

  return (
    <div className="boardwrapper">
      <h3>게시글 내용</h3>


        {board.map((item: Board) => {
          return (
            <div key={item.id}> 
              <span>게시글번호 : {item.id}</span>
              <Link to={`/board/${item.id}`}>
              {item.datatitle}
              </Link>
              <span>작성자 : {item.dataname}</span>

        </div>
          )
      })}


    </div>
  );
};

export default Board;
