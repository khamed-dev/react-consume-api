import { useState, useEffect } from 'react';

export const useGetFetch = resourceURL => {
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => { 
        setLoading(true);
        (async () => {
            try {
                const response = await fetch(resourceURL);
                const data = await response.json();
                setResource(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        })();
    }, [resourceURL]);

    return [loading, resource, error];
}