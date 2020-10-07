import React from 'react';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import schemas from '../../schemas';


function FormPlayground() {
  const handleSubmit = (values, actions) => {
    console.log('SUBMIT', values)
  }

  return (
    <Formik
      validationSchema={schemas}
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        email: ''
      }}
      render={({isValid}) => (
        <Form>
          <div>
            <label>Nome</label>
            <Field name="name" type="text"/>
            <ErrorMessage name="name"/>
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email"/>
            <ErrorMessage name="email"/>
          </div>
          <button type="submit" disabled={isValid}>Submit</button>
        </Form>
      )}
    />
  );
}

export default FormPlayground;