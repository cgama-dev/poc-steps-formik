import React from 'react'
import { WizardStepProps } from '../Wizard/contracts'

export const Page3: React.FC<WizardStepProps> = (props: WizardStepProps) => {
  const handleBack = (values: any) => {
    props.back(values)
  }
  return (
    <>
      <h1>Página 3 Onboarding</h1>
      <button type="button" onClick={handleBack}>Voltar</button>
    </>
  )
}
