import { useState, useEffect } from "react";

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
    return ( <h1>{fetchMessage ? fetchMessage : 'Loading...'}</h1> );
}

export default HelloFromExpress;