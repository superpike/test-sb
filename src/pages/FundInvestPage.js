import React, { Component } from 'react'
import { connect } from 'react-redux';
import { isValid } from 'redux-form'

import FundInvest from '../components/FundInvest';

import { updateFund } from './../store/actions/fundsActions';

class FundInvestPage extends Component {
    handleSubmit = values => {
        this.props.dispatch(updateFund(this.props.id));
        this.props.closeForm();
    }

    render() {
        return <FundInvest onSubmit={this.handleSubmit} amount_min={this.props.amount_min} amount_max={this.props.amount_max} />
    }
}

const mapStateToProps = (store) => {
    return {
        isValid: isValid('invest'),
    }
}

export default connect(mapStateToProps)(FundInvestPage);