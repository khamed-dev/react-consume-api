import { useGetFetch } from './useGetFetch';
import PixabayItem from '../components/PixabayItem';


{/*we can customize these two function for each compoenent to show customized error  for code reuse */ }
const returnLoading = () => <div><p>Loading...</p></div>;
const returnError = () => <div><p>error getting the data...</p></div>;

const GetDataSource = ({ componentToEnhance: EnhancedComponent, fetResourceFunc, extractData, resourceName }) => {
   const [loading,resources,error] = useGetFetch(fetResourceFunc,extractData);
    
    if (loading) return returnLoading();

    if (error) return returnError();


    return <EnhancedComponent itemComponent={PixabayItem} resourceName={resourceName} items={resources} />;
}
export default GetDataSource;
