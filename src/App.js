import {  createContext } from 'react';
import { useInput } from './helpers/useInput';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

export const InputContext = createContext();

function App() {


  {/*{ value: valueOfQ, onChange: onChangeInputQ }
{ value: valueOfImage, onChange: onChangeInputImage } 
*/}

  const inputQ = useInput("");
  const inputImageType= useInput("");


  return (
    <div className="App">
      <InputContext.Provider value={{ inputQ, inputImageType}}>
        <Header />
        <Body />
      </InputContext.Provider>
    </div>
  );
}

export default App;
