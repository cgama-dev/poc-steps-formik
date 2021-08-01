import React from 'react'
import styles from '../../styles/Home.module.css'
import { WizardStepProps } from '../components/Wizard/contracts'
import { Wizard, Page1, Page2, Page3 } from './../components'

const Onboarding: React.FC = () => {
  const steps:any = (props: WizardStepProps) => [
    <Page1 key={1} next={props.next} />,
    <Page2 key={2} next={props.next} back={props.back} />,
    <Page3 key={3} next={props.next} back={props.back} />
  ]
  return (
    <section className={styles.container}>
      <Wizard steps={steps} />
    </section>
  )
}

export default Onboarding
