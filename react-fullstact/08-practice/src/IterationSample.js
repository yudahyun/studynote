import React,{useState} from 'react';

const IterationSample = () => {
    const [names,setNames]= useState([
        {id:1,text:"봄"},
        {id:2,text:"여름"},
        {id:3,text:"가을"},
        {id:4,text:"겨울"},
    ]);
    const [inputText,setInputText] = useState();
    const [nextId , setNextID] = useState(5);
    const onChange=(e)=>{setInputText(e.target.value)}
    const onClick=()=>{
        const nextNames = names.concat({id:nextId,text:inputText})
        setNextID(nextId+1)
        setNames(nextNames);
        setInputText("")
    }
     const namesList = names.map(name=><li key={name.id}>{name.text}</li>)
    return (
        <div>
            <input type="text" value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </div>
    );
};

export default IterationSample;