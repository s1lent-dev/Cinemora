import React from 'react';
import './styles.scss'
import { useState } from 'react';
import ContentWrapper from "../ContentWrapper/ContentWrapper"
import { useParams } from 'react-router-dom';

import DetailsBanner from "./DetailsBanner"
const Details = () => {
  const{id, type}=useParams();
  const[loading, setLoading]=useState(false);
  return (
    <div className="Details">
      {!loading ? (
        <DetailsBanner/>
      ):(
        <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
      )}
    </div>
  );
}

export default Details;
