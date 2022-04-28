import React from "react";

const Loop1 = () => {
  const createListItem = (count) => {
    let li = [];
    for (let i = 0; i < count; i++) {
      li.push(<li key={i}>Item{i}</li>);
    }
    return li;
  };
  return (
    <div>
      <h2>
        Loop1
      </h2>
      <ul>
        {createListItem(5)}
      </ul>
    </div>
  );
  
};

export default Loop1;
