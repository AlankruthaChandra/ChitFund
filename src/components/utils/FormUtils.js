import React from 'react'
import { Field } from 'react-final-form'
import { Label } from 'semantic-ui-react'

export const FieldError = ({ name }) => (
    <Field
        name={name}
        subscription={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
            touched && error ? <Label basic color='red' pointing='above'>{error}</Label> : null
        }
    />
)