
import React from 'react'

export interface WizardProps {
  data?: any,
  steps(props: WizardStepProps): React.FC<WizardStepProps>[]
}
export interface WizardStepProps {
  next(data: any, lastStep?: boolean): void,
  back?(data: any): void,
  data?: any
}
