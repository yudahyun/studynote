import React from 'react';
import {Helmet,HelmetProvider} from "react-helmet-async";

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                {/* <title>{props.title}</title> */}
                <style type="text/css">
                    {`
                        *{
                            font-family: "Noto Sans",sans-serif;
                        }
                        body{
                            margin: 0;
                        padding: 30px;                        }
                   ` }
                </style>
            </Helmet>
            
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title:"React-Example",
    
}
export default Meta;