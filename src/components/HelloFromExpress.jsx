import { useState, useEffect } from "react";
import { RotatingLines } from 'react-loader-spinner'
function HelloFromExpress() 
{
    const [fetchMessage, setFetchMessage] = useState('');
    useEffect(() => {
        const fetchMessage = async () => 
        {
            const response = await fetch('/api/hello');
            const data = await response.text();
            setTimeout(() => setFetchMessage(data), 1000);
          

        };

        fetchMessage();
    }, []);
    return ( <h1>{fetchMessage ? fetchMessage : <RotatingLines
        visible={true}
        height="48"
        width="48"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />}</h1> );
}

export default HelloFromExpress;