import React, { useState } from 'react'
const useInputValue = (initialValue) =>{
    const [value   , setValue]  = useState(initialValue);
    return {
        value , onChange : e => setValue(e.target.value),
        resetValue : () => setValue('')
    }
}
const  Form  = () => {
    const {resestValue , ...text} = useInputValue('');
    
    return (
        <Form onSubmit = {e => {
            e.preventDefault();
            onsubmit(text.value);
            resestValue();
        }}> 

        <input{...text} /> 
            </Form>

    );
};
export default Form;