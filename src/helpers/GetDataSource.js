import { useGetFetch, REQUEST_STATUS } from '../hooks/useGetFetch';
import PixabayItem from '../components/PixabayItem';

{/*we can customize these two function for each compoenent to show customized error  for code reuse */ }
const returnLoading = () => <div><p>Loading...</p></div>;
const returnError = () => <div><p>error getting the data...</p></div>;


function GetDataSource({ componentToEnhance: EnhancedComponent, fetResourceFunc, extractDataFunc=data=>data, resourceName }) {
   const [requestStatus,resources] = useGetFetch(fetResourceFunc,extractDataFunc);
    
    if (requestStatus===REQUEST_STATUS.LOADING) return returnLoading();

    if (requestStatus===REQUEST_STATUS.FAILURE) return returnError();

    return <EnhancedComponent itemComponent={PixabayItem} resourceName={resourceName} items={resources} />;
}
export default GetDataSource;
