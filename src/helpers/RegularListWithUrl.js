import { memo, useRef, useEffect } from 'react';
import { useGetFetch } from './useGetFetch';
import PixabayItem from '../components/PixabayItem';
import RegularList from './RegularList';

const RegularListWithUrl = ({
    url
}) => {
    const [loading, resources, error] = useGetFetch(url);
    const { hits } = resources || [];
    console.log(hits)
    const prevUrlRef = useRef();
    useEffect(() => {
        prevUrlRef.current = url;
    }, [url]);

    if (loading) return <p>loading...</p>

    if (error && prevUrlRef.current !== url) return <p>error : server not responding...</p>
    return hits ? <div className="ui grid container">
        <RegularList items={hits} resourceName="pixabay" itemComponent={PixabayItem} /> </div>
        : null

}

export default memo(RegularListWithUrl);