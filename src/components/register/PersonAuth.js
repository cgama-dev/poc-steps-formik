import { Formik, Form, Field, ErrorMessage } from 'formik';
import { PersonAuthSchema } from '../../schemas';

export const PersonAuth = (props)=> {
    const handleValidatePersonAuth =  (values)=>{
      props.next(values, true);
    }
    return (
      <>
        <Formik
          validationSchema={PersonAuthSchema}
          initialValues={props.data}
          onSubmit={handleValidatePersonAuth}
        >
          {({values})=>(
            <Form>
              <p>Email</p>
              <Field name="email" />
              <ErrorMessage name="email" />
              <p>Password</p>
              <Field name="password" />
              <ErrorMessage name="password" />
              <button type="submit">Finalizar</button>
              <button type="button" onClick={()=> props.back(values)}>Back</button>
            </Form>
          )}
        </Formik>
      </>
    );
  }