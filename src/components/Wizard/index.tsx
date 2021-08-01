import React, { useState } from 'react'
import { WizardProps } from './contracts'

export const Wizard: React.FC<WizardProps> = (props: WizardProps) => {
  const [data = {}, setData] = useState(props.data)
  const [current, setCurrent] = useState(0)
  const next = (newState = {}, lastStep: boolean) => {
    setData((state) => ({ ...state, ...newState }))
    if (lastStep) {
      console.log(newState)
      return
    }
    setCurrent((data) => data + 1)
  }

  const back = (newState = {}) => {
    setData((state) => ({ ...state, ...newState }))
    setCurrent((data) => data - 1)
  }

  const wizardStepProps = { next, back, data }

  const steps = [...props.steps(wizardStepProps)]
  return (
        <section>{steps[current]}</section>
  )
}
