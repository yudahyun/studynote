import React from 'react';
import styled from "styled-components";

const ListItem = styled.li`
        border-top: 1px solid #ccc;
    
        &:last-child {
            border-bottom:1px solid #ccc
        }
        .list-item-link{
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
            padding: 5px 10px;
            text-decoration: none;
            color: #000;
            transition: all 0.1s;
            &:hover{
                background-color: #eeeeee;
            }
            .thumbnail{
                width: 150px;
                height: 100px;
                display: block;
                object-fit: cover;
                flex:none;
            }
            .content{
                flex:0 1 auto;
                padding: 5px 0 5px 20px;
                background: #ff01;
                h3{
                    background: #f0f1;
                    box-shadow: border-box;
                    font-size: 18px;
                    font-weight: bold;
                    margin: 0;
                    margin-bottom: 10px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp:1 ;
                    -webkit-box-orient: vertical;
                }
                p{
                    background-color: #0601;
                    font-size:14px;
                    margin: 0;
                    margin-bottom: 8px;
                }
            }
        }
    `
const NewsItem = ({item:{author,title,description,url,image,datetime}}) => {
    return (
        <ListItem>
            <a href={url} target="_blank" className="list-item-link" rel="noreferrer">
                <img src={image} alt={title} className="thumbnail" />
                <div className="content">
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <ul>
                    <li>{author}</li>
                    <li>
                        {new Date(datetime).toLocaleString()}
                    </li>
                </ul>
                </div>
            </a>

        </ListItem>
            
        
    );
};

export default NewsItem;