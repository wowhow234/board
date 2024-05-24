import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
    const { id } = useParams < { id: string }>()

    const [boardDetail, setBoardDetail] = useState<any>([])

    useEffect(() => {
        axios.get(`/db/data.json`)
    .then((response) => {
      console.log(response);
        setBoardDetail(response.data);
        console.log("boardDetail---->", boardDetail);
        console.log("params----->", id);
    })
    .catch((err) => console.log(err));
  },[])

    return (
        <div>
            <h3>게시판 상세 내용</h3>
            <span>{id}</span>
            <span>{boardDetail.id}</span>
            <span>{boardDetail.dataname}</span>
            <span>{boardDetail.datatitle}</span>
            <span>{boardDetail.datacontent}</span>
            
        </div>
    );
};

export default BoardDetail;