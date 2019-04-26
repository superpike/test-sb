import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFunds } from '../../store/actions/fundsActions';
import Spinner from '../../components/UI/Spinner';
import FundsItem from '../../components/FundsItem';

import classes from './FundsList.module.css';

class FundsList extends Component {
    componentDidMount() {
        this.props.dispatch(getFunds());
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Spinner />
            );
        }

        const showList = this.props.funds.map(el => {
            return (
                <FundsItem key={el.id} {...el} />
            )
        });

        return (
            <div className={classes.fundsList}>
                {showList}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        isLoading: store.funds.isLoading,
        funds: store.funds.funds
    }
}

export default connect(mapStateToProps)(FundsList);