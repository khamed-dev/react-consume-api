
import { URL } from '../API/PIXABAY_API';
import { useEffect, useContext, useState } from "react";
import { InputContext } from '../App';
import RegularListWithUrl from '../helpers/RegularListWithUrl';

const Body = () => {

    const [url, setUrl] = useState("");
    const { valueOfQ, valueOfImage } = useContext(InputContext);
    function _makeReqeust(value) {
        return value.length >= 3;
    }
    useEffect(() => {
        if (_makeReqeust(valueOfQ) || _makeReqeust(valueOfImage))
            setUrl(`${URL}&q=${valueOfQ}&image_type=${valueOfImage}`)

    }, [valueOfQ, valueOfImage]);

    return <RegularListWithUrl url={url} />

}


export default Body;