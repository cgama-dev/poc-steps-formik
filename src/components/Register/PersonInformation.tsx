import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { PersonInformationSchema } from '../../schemas'
import { WizardStepProps } from '../Wizard/contracts'

export const PersonInformation: React.FC<WizardStepProps> = (props: WizardStepProps) => {
  const handleValidatePersonInformation = (values: any) => {
    props.next(values)
  }
  return (
    <>
      <Formik
        validationSchema={PersonInformationSchema}
        initialValues={props.data}
        onSubmit={handleValidatePersonInformation}
      >
        {() => (
          <Form>
            <p>Nome</p>
            <Field name="name" />
            <ErrorMessage name="name" />

            <p>Data de Nascimento</p>
            <Field name="birthday" />
            <ErrorMessage name="birthday" />

            <p>Documento</p>
            <Field name="cpf" />
            <ErrorMessage name="cpf" />

            <button type="submit">Próximo</button>
          </Form>
        )}
      </Formik>
      </>
  )
}
