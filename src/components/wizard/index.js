import { useState } from 'react';
export const Wizard = (props)=> {
    const [data, setData] = useState(props.data);
    const [current, setCurrent] = useState(0);
    const handleNextStep = (newState, final)=> {
      setData((state)=> ({...state, ...newState}));
      if(final){
        console.log(newState)
        return;
      }
      setCurrent((data) => data + 1);
    }
  
    const handleGoBackStep = (newState)=> {
      setData((state)=> ({...state, ...newState}));
      setCurrent((data)=> data - 1);
    }
  
    const steps = [...props.steps(handleNextStep, handleGoBackStep, data)];
    return (
        <section>{steps[current]}</section>
    )
}  