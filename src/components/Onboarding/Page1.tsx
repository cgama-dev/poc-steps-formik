import React from 'react'
import { WizardStepProps } from '../Wizard/contracts'

export const Page1: React.FC<WizardStepProps> = (props: WizardStepProps) => {
  const handleNext = (values: any) => {
    props.next(values)
  }
  return (
    <>
      <h1>Página 1 Onboarding</h1>
      <button type="button" onClick={handleNext}>Próximo</button>
    </>
  )
}
