
import { getImagesFromPixabayApi } from '../API/PIXABAY_API';
import { useEffect, useContext } from "react";
import { InputContext } from '../App';
import GetDataSource from '../helpers/GetDataSource';
import RegularList from '../helpers/RegularList';

function _makeReqeust(value) {
    return value.length >= 3;
}

function _getValueQAndImageType() {
    const { inputQ, inputImageType } = useContext(InputContext);
    return [inputQ.value, inputImageType.value];
}

const pixabayProps = {
    componentToEnhance: RegularList,
    fetResourceFunc: () => getImagesFromPixabayApi(..._getValueQAndImageType()),
    extractData: (object) => object.hits,
    resourceName: "pixabay"
}


const Body = () => {

    const [valueOfQ, valueOfImage] = _getValueQAndImageType();

    useEffect(() => {
    }, [valueOfQ, valueOfImage]);

    return (_makeReqeust(valueOfQ) || _makeReqeust(valueOfImage))
        ? <div className="ui grid container"><GetDataSource {...pixabayProps} /></div>
        : null;

}


export default Body;