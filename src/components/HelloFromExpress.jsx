import { useState, useEffect } from "react";

function HelloFromExpress() 
{
    const [fetchMessage, setFetchMessage] = useState('');
    useEffect(() => {
        const fetchMessage = async () => 
        {
            const response = await fetch('/api/hello');
            const data = await response.text();

            setFetchMessage(data);

        };

        fetchMessage();
    }, []);
    return ( <h1>{fetchMessage}</h1> );
}

export default HelloFromExpress;