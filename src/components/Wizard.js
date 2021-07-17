import { useState } from 'react';
export const Wizard = (props)=> {
    const [data, setData] = useState(props.initialData);
    const [current, setCurrent] = useState(0);
    const handleNextStep = (newState, final)=> {
      setData((state)=> ({...state, ...newState}));
      if(final){
        setCurrent(0)
        return;
      }
      setCurrent((data) => data + 1);
    }
  
    const handleGoBackStep = (newState)=> {
      setData((state)=> ({...state, ...newState}));
      setCurrent((data)=> data - 1);
    }
  
    const steps = [...props.initStepsComponents(handleNextStep, handleGoBackStep, data)];
    return (
        <section>{steps[current]}</section>
    )
}  