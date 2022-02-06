import { useState, useEffect } from 'react';

export const useGetFetch = (fetResourceFunc, extractData) => {
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => { 
        setLoading(true);
        (async () => {
            try {
                const response = await fetResourceFunc();
                const data = await response.json();
                setResource(extractData(data));
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        })();
    }, [fetResourceFunc]);

    return [loading, resource, error];
}