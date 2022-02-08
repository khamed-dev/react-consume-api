import { useState, useEffect } from 'react';
export const REQUEST_STATUS = {
    LOADING:"loading",
    SUCCESS : "success",
    FAILURE:"failure"
}

export const useGetFetch = (fetResourceFunc, extractData) => {
    const [resource, setResource] = useState(null);
    { /*const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);*/}
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);

    useEffect(() => { 
        { /* setLoading(true);*/}

        (async () => {
            try {
                const response = await fetResourceFunc();
                const data = await response.json();
                
                setResource(extractData(data));
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                { /*   setLoading(false);
                setError(false);*/}
            } catch (error) {

            { /*   setError(true);
            setLoading(false);*/}

            setRequestStatus(REQUEST_STATUS.FAILURE);
            }
        })();
    }, [fetResourceFunc]);

    return [requestStatus, resource];
}