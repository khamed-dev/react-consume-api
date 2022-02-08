
import { InputContextProvider } from './contexts/InputContextProvide';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';


function App() {


  {/*{ value: valueOfQ, onChange: onChangeInputQ }
{ value: valueOfImage, onChange: onChangeInputImage } 
*/}



  return (
    <div className="App">
      <InputContextProvider >
        <Header />
        <Body />
      </InputContextProvider>
    </div>
  );
}

export default App;
