import React from 'react';
import {Helmet} from "react-helmet";

const Meta = () => {
    return (
        <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>스타일 연습문제</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?
                family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap"
                rel="stylesheet"/>
                   
        </Helmet>
    );
};

export default Meta;