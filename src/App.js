import {  createContext } from 'react';
import { useInput } from './helpers/useInput';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { getImagesFromPixabayApi } from './API/PIXABAY_API';

export const InputContext = createContext();

function App() {




  const { value: valueOfQ, onChange: onChangeInputQ } = useInput("");
  const { value: valueOfImage, onChange: onChangeInputImage } = useInput("");


  return (
    <div className="App">
      <InputContext.Provider value={{ valueOfQ, onChangeInputQ, valueOfImage, onChangeInputImage }}>
        <Header />
        <Body />
      </InputContext.Provider>
    </div>
  );
}

export default App;
