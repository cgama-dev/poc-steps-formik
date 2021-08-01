import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { PersonAuthSchema } from '../../schemas'
import { WizardStepProps } from '../Wizard/contracts'

export const PersonAuth: React.FC<WizardStepProps> = (props: WizardStepProps) => {
  // TODO: Configurar last step
  const handleValidatePersonAuth = (values) => {
    props.next(values, true)
  }
  return (
      <>
        <Formik
          validationSchema={PersonAuthSchema}
          initialValues={props.data}
          onSubmit={handleValidatePersonAuth}
        >
          {({ values }) => (
            <Form>
              <p>Email</p>
              <Field name="email" />
              <ErrorMessage name="email" />
              <p>Senha</p>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
              <p>Confirmação Senha</p>
              <Field type="password" name="passwordConfirmation" />
              <ErrorMessage name="passwordConfirmation" />
              <button type="submit">Finalizar</button>
              <button type="button" onClick={() => props.back(values)}>Back</button>
            </Form>
          )}
        </Formik>
      </>
  )
}
