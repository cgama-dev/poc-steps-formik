import styles from '../../styles/Home.module.css';
import { Wizard } from '../components/Wizard'
import {PersonInformation, PersonAddress, PersonAuth} from '../components/register'
export default function Init() {
  const initialData = {
    name: '',
    birthday: '',
    cpf: '',
    cep: '',
    neighborhood: '',
    city: '',
    email: '',
    password: ''
  };
 
  const initStepsComponents = (handleNextStep, handleGoBackStep, data)=> [
    <PersonInformation  key={1} next={handleNextStep} data={data}/>,
    <PersonAddress  key={2} next={handleNextStep} back={handleGoBackStep} data={data}/>,
    <PersonAuth  key={3} next={handleNextStep} back={handleGoBackStep} data={data}/>,
  ];
  return (
    <section className={styles.container}>
      <Wizard initStepsComponents={initStepsComponents} initialData={initialData}/>
    </section>
  )
}
