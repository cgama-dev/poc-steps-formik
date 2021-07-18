import styles from '../../../styles/Home.module.css';
import { Wizard } from '../wizard'
import { PersonInformation } from './PersonInformation'
import { PersonAddress } from './PersonAddress'
import { PersonAuth } from './PersonAuth'
export default function Register() {
  const data = {
    name: '',
    birthday: '',
    cpf: '',
    cep: '',
    neighborhood: '',
    city: '',
    email: '',
    password: ''
  };
 
  const steps = (handleNextStep, handleGoBackStep, data)=> [
    <PersonInformation  key={1} next={handleNextStep} data={data}/>,
    <PersonAddress  key={2} next={handleNextStep} back={handleGoBackStep} data={data}/>,
    <PersonAuth  key={3} next={handleNextStep} back={handleGoBackStep} data={data}/>,
  ];
  return (
    <section className={styles.container}>
      <Wizard steps={steps} data={data}/>
    </section>
  )
}
