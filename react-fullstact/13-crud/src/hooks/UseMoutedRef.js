import React from 'react';

const useMoutedRef = () => {
    
    const moutedRef = React.useRef(false);
    
    React.useEffect(() =>{
        setTimeout(()=>{
            moutedRef.current = true;
        })
    },[]);

    return moutedRef;
};

export default useMoutedRef;