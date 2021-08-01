import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { PersonAddressSchema } from '../../schemas'
import { WizardStepProps } from '../Wizard/contracts'

export const PersonAddress: React.FC<WizardStepProps> = (props: WizardStepProps) => {
  const handleValidatePersonAddress = (values) => {
    props.next(values)
  }
  return (
      <Formik
        validationSchema={PersonAddressSchema}
        initialValues={props.data}
        onSubmit={handleValidatePersonAddress}
      >
        {({ values }) => (
           <Form>
            <p>Cep</p>
            <Field name="cep" />
            <ErrorMessage name="cep" />
            <p>Bairro</p>
            <Field name="neighborhood" />
            <ErrorMessage name="neighborhood" />
            <p>Cidade</p>
            <Field name="city" />
            <ErrorMessage name="city" />
            <button type="submit">Próximo</button>
            <button type="button" onClick={() => props.back(values)}>Voltar</button>
          </Form>
        )}
    </Formik>
  )
}
