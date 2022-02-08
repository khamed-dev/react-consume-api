import {  createContext } from 'react';
import { useInput } from '../hooks/useInput';

export const InputContext = createContext();


export const InputContextProvider = ({ children }) =>{

    const inputQ = useInput("");
    const inputImageType= useInput("");

return (
    <InputContext.Provider value={{ inputQ, inputImageType }}>
      {children}
    </InputContext.Provider>
  );
}
