import { useContext } from "react";

import { InputContext } from '../contexts/InputContextProvide';


const Header = () => {
  const { inputQ, inputImageType } = useContext(InputContext);

  return <div className="ui fixed menu">
    <div className="ui container center">
      <input type="text" name="q" placeholder='enter query' value={inputQ.value} onChange={inputQ.onChange} />
      <input type="text" name="image_type" placeholder='photo type' value={inputImageType.value} onChange={inputImageType.onChange} />

    </div>
  </div>

}

export default Header;