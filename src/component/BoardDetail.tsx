import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BoardItem from './BoardItem';

const BoardDetail = () => {
    const { id } = useParams < { id: string }>()

    const [boardDetail, setBoardDetail] = useState<any>([])

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/board/${id}`)
    .then((response) => {
      console.log("get요청한거 받아지나?----->", response.data);
        setBoardDetail(response.data);
        // console.log("boardDetail---->", boardDetail);
        // console.log("params----->", id);
    })
        .catch((err) => console.log(err));
  },[])

    return (
        <div>
            <h3>게시판 상세 내용</h3>
            <span>파라미터 : {id}</span>
            <button onClick={goBack}>뒤로가기</button>
            {/* <BoardItem /> */}
            <span>{boardDetail.dataname}</span>
            <span>{boardDetail.datatitle}</span>
            <span>{boardDetail.datacontent}</span>
        </div>
    );
};

export default BoardDetail;