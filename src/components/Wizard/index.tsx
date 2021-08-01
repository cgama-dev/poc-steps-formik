import React, { useState } from 'react'

interface WizardProps {
  data: any,
  steps(nextStep: any, backStep: any, data: any): React.FC<WizardStepProps>[]
}
export interface WizardStepProps {
  next(data: any, lastStep?: boolean): void,
  back?(data: any): void,
  data: any
}

export const Wizard: React.FC<WizardProps> = (props: WizardProps) => {
  const [data, setData] = useState(props.data)
  const [current, setCurrent] = useState(0)
  const handleNextStep = (newState: any, lastStep: boolean) => {
    setData((state) => ({ ...state, ...newState }))
    if (lastStep) {
      console.log(newState)
      return
    }
    setCurrent((data) => data + 1)
  }

  const handleGoBackStep = (newState: any) => {
    setData((state) => ({ ...state, ...newState }))
    setCurrent((data) => data - 1)
  }

  const steps = [...props.steps(handleNextStep, handleGoBackStep, data)]
  return (
        <section>{steps[current]}</section>
  )
}
