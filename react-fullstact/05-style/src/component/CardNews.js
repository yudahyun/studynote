import React from 'react';
import styled from "styled-components";
import NewsData from "../NewsData";

const CardContainet = styled.ul`


`;
const CardNews = () => {
    return (
        <div>
            <CardContainet>
                {NewsData.map((v,i)=>{
                    const {url,title,image} = v;
                    return(
                        <li key={i}>
                            <a href={url}>
                                <img src={image}  alt={title}/>
                            </a>
                        </li>
                    )
                })}
            </CardContainet>
        </div>
    );
};

export default CardNews;