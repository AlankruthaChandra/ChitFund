import React, { Component } from 'react';
import { Button, Header, Icon, Container, Divider } from 'semantic-ui-react';
import { Form, Field } from 'react-final-form'
import { FieldError } from './utils/FormUtils';

class CreateChit extends Component {


  render() {
    return (
      <Container>

        <Form
          onSubmit={(values) => console.log(values)}
          validate={values => {
            const errors = {}
            if (!values.contractName) {
              errors.contractName = 'Required field'
            }
            return errors
          }}
          render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit} className='ui form'>
              <Header size="large">Create Contract (Chit):</Header>
              <Divider />
              <div className='field'>
                <Header>Contract Name</Header>
                <Field name="contractName" component="input" placeholder="Contract Name" />
                <FieldError name='contractName' />
              </div>

              <div className='field'>
                <Header>Additional</Header>
                <Field name="sec" component="input" placeholder="add" />
                <FieldError name='sec' />
              </div>


              <Button type="submit" disabled={pristine || invalid}>
                Submit
              </Button>
            </form>
          )}
        />

      </Container>
    )
  }
}

export default CreateChit;
