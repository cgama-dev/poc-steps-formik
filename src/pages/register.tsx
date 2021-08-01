import React from 'react'
import styles from '../../styles/Home.module.css'
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

  const steps:any = (handleNextStep: any, handleGoBackStep: any, data: any) => [
    <PersonInformation key={1} next={handleNextStep} data={data}/>,
    <PersonAddress key={2} next={handleNextStep} back={handleGoBackStep} data={data}/>,
    <PersonAuth key={3} next={handleNextStep} back={handleGoBackStep} data={data}/>
  ]
  return (
    <section className={styles.container}>
      <Wizard steps={steps} data={data}/>
    </section>
  )
}

export default Register
