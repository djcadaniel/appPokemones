import { useState } from "react";

export const useInputChange = (initalValue = '') => {

  const [input, setInput] = useState('');

  const onInputChange = ({target})=>{
    console.log(target.value)
    setInput(target.value)
  }
  
  const resetForm = ()=>{
    setInput(initalValue)
  }
  
  const onFormSubmit = (event)=>{
    event.preventDefault();
    if(input.length <= 2) return;
    resetForm();
  }

  return {
    input,
    onInputChange,
    onFormSubmit
  }
}