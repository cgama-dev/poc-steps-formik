import React from 'react'
import { WizardStepProps } from '../Wizard/contracts'

export const Page2: React.FC<WizardStepProps> = (props: WizardStepProps) => {
  const handleNext = (values: any) => {
    props.next(values)
  }
  const handleBack = (values: any) => {
    props.back(values)
  }
  return (
    <>
      <h1>Página 2 Onboarding</h1>
      <button type="button" onClick={handleNext}>Próximo</button>
      <button type="button" onClick={handleBack}>Voltar</button>
    </>
  )
}
