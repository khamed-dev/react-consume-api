import { useContext } from "react";
import { InputContext } from '../App';
const Header = () => {
  const { valueOfQ, onChangeInputQ, valueOfImage, onChangeInputImage } = useContext(InputContext);
  return <div className="ui fixed menu">
    <div className="ui container center">
      <input type="text" name="q" placeholder='enter query' value={valueOfQ} onChange={onChangeInputQ} />
      <input type="text" name="image_type" placeholder='photo type' value={valueOfImage} onChange={onChangeInputImage} />

    </div>
  </div>

}

export default Header;