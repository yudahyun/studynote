import React from "react";
import styled from "styled-components";
import NewsData from "../NewsData";
import NewsItem from "./NewsItem";
const ListContainer = styled.ul`

  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ListNews = () => {
  return (
    <ListContainer>
      {NewsData.map((v, i) => 
        <NewsItem key={i} item={v} />
      )}
    </ListContainer>
  );
};

export default ListNews;
