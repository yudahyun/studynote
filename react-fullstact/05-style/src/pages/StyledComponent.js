import React from "react";

//기능을 위한 참조 
import styled ,{css} from "styled-components";

const MyGridContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1024px;border:2px solid #cc0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;

const MyGridItem = styled.li`
    width: ${props=>props.width};
`;

const MyBox = styled.div`
    border: 3px dotted #000;
    background: #eee;
    height: 100px;
    text-align:center;
    font-size:20px;
    line-height:100px;
    cursor:pointer;
    transition: all 0.1s ease-in;

    color : ${props=>props.color};

    %:hover {
        transform:scale(1.05,1.05) rotate(-10deg);
        color: #fff;
    }
    ${
        (props)=>
            props.number % 2 ===1 &&
            css`
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
            `};
    
`;

const StyledComponent =()=>{
    const myColor = ["red","green","yellow","purple","orange","pink","blue"];
    const myWidth =100 / myColor.length + "%";

    return (

        <div>
            <h2>
                StyledComponent
            </h2>
            <MyGridContainer>
                <MyGridItem width={"20%"}>
                    <MyBox>Item1</MyBox>
                </MyGridItem>
                <MyGridItem width={"20%"}>
                    <MyBox>Item2</MyBox>
                </MyGridItem>
                <MyGridItem width={"20%"}>
                    <MyBox>Item3</MyBox>
                </MyGridItem>
                <MyGridItem width={"20%"}>
                    <MyBox>Item4</MyBox>
                </MyGridItem>
                <MyGridItem width={"20%"}>
                    <MyBox>Item5</MyBox>
                </MyGridItem>
                <MyGridItem width={"20%"}>
                    <MyBox>Item6</MyBox>
                </MyGridItem>
                <MyGridItem width={"20%"}>
                    <MyBox>Item7</MyBox>
                </MyGridItem>
            </MyGridContainer>
            <h3>배열 원소를 활용한 컴포넌트 사용</h3>
            <MyGridContainer>
               {myColor.map((color,index)=>{
                   return(
                       <MyGridItem key={index} width={myWidth}>
                           <MyBox color={color} number={index}>
                               {color}
                           </MyBox>
                       </MyGridItem>
                   )
               })}
            </MyGridContainer>
        </div>
    )
}
export default StyledComponent;