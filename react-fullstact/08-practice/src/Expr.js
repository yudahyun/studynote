import React from 'react';
import { useParams } from 'react-router-dom';
const data={
    customer:{
        name:"다현",
        description :"손님"
    },
    favorite:{
        name:"라떼",
        description:"4500원"
    }
}
const Expr = () => {
    const param =useParams();
    const profile = data[param.username];
    console.log(profile);
     return (
        <div>
            {
                profile ? (
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.description}</p>
                    </div>
                ):(
                    <p>존재하지 않는 프로필입니다.</p>
                )
            }
        </div>
    );
};

export default Expr;