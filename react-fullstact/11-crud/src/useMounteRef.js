import React from 'react';

const useMounteRef = () => {
    
    const mountedRef = React.useRef(false);

    React.useEffect(()=>{
        setTimeout(() =>{
            mountedRef.current=(true);
        });
    },[])
    
    return mountedRef;
};

export default useMounteRef;