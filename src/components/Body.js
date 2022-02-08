
import { getImagesFromPixabayApi } from '../API/PIXABAY_API';
import {  useContext } from "react";
import { InputContext } from '../contexts/InputContextProvide';
import GetDataSource from '../helpers/GetDataSource';
import RegularList from '../helpers/RegularList';

function _makeReqeust(value) {
    return value.length >= 3;
}


const pixabayProps = {
    componentToEnhance: RegularList,
    extractDataFunc: object => _extractHits(object),
    resourceName: "pixabay"
}
function _extractHits(obj){
    return obj.hits;
}


const Body = () => {

    const { inputQ, inputImageType } = useContext(InputContext);
    const valueOfQ = inputQ.value;
    const valueOfImage = inputImageType.value;

    return (_makeReqeust(valueOfQ) || _makeReqeust(valueOfImage))
        ? <div className="ui grid container"><GetDataSource {...pixabayProps}
            fetResourceFunc={() => getImagesFromPixabayApi(valueOfQ, valueOfImage)} /></div>
        : null;
}


export default Body;