import React from 'react';
import { Field, reduxForm } from 'redux-form'

import Button from '../UI/Button';

import classes from './FundInvest.module.css';

const required = value => value ? undefined : 'Required'
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined


let fundInvest = props => {
    const { handleSubmit } = props
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.fieldWrapper}>
                <label htmlFor="email">Электронная почта</label>
                <Field className={classes.field} name="email" component="input" type="text" validate={[required, email]} />
            </div>
            <div className={classes.fieldWrapper}>
                <label htmlFor="amount">Сумма ({props.amount_min} - {props.amount_max})</label>
                <Field
                    className={classes.field}
                    name="amount"
                    component="input"
                    type="number"
                    validate={[required, number]}
                    min={props.amount_min}
                    max={props.amount_max}
                />
            </div>
            <div className={classes.submit}>
                <Button btnType='Success' type="submit">Отправить</Button>
            </div>
        </form>
    )
}

fundInvest = reduxForm({
    form: 'invest'
})(fundInvest)

export default fundInvest
