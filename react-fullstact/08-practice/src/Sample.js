import React from 'react';

const Sample = () => {
    const name = ["봄","여름","가을","겨울"];
    const nameList = name.map((name,i)=><li key={i}>{name}</li>);
    return (
        <div>
            <ul>{nameList}</ul>
        </div>
    );
};

export default Sample;