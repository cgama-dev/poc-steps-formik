import React from 'react'
import styles from '../../styles/Home.module.css'
import { WizardStepProps } from '../components/Wizard/contracts'
import { Wizard, PersonInformation, PersonAddress, PersonAuth } from './../components'

const Register: React.FC = () => {
  const data = {
    name: '',
    birthday: '',
    cpf: '',
    cep: '',
    neighborhood: '',
    city: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  const steps:any = (props: WizardStepProps) => [
    <PersonInformation key={1} next={props.next} data={props.data}/>,
    <PersonAddress key={2} next={props.next} back={props.back} data={props.data}/>,
    <PersonAuth key={3} next={props.next} back={props.back} data={props.data}/>
  ]
  return (
    <section className={styles.container}>
      <Wizard steps={steps} data={data}/>
    </section>
  )
}

export default Register
