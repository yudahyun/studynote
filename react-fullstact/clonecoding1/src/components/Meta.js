/**
 * @fileName :ydh (ekgus1129@gmail.com)
 * @Date :2022-04-29
 */

import React from 'react';
import {Helmet ,HelmetProvider} from "react-helmet-async";
import PropTypes from "prop-types";


const Meta = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>클론코딩1</title>
                <link href="http://fonts.cdnfonts.com//css/georgia" rel="stylesheet"/>
                
            </Helmet>
        </HelmetProvider>
    );
};

Meta.propTypes={
    title: PropTypes.string
}

export default Meta;