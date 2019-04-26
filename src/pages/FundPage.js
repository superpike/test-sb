import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFund } from '../store/actions/fundsActions';
import Spinner from '../components/UI/Spinner';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import FundInvestPage from './FundInvestPage';

import classes from './FundPage.module.css';

class FundPage extends Component {
  state = {
    showModal: false
  }

  componentDidMount() {
    this.props.dispatch(getFund(this.props.match.params.id));
  }

  handlerOpenForm = (id) => {
    this.setState({
      showModal: true
    });
  }

  handlerCloseForm = (id) => {
    this.setState({
      showModal: false
    });
    // this.props.history.push('/')
  }

  render() {
    if (this.props.isLoadingFund || !this.props.currentFund) {
      return (<Spinner />);
    }

    return (
      <>
        <Modal show={this.state.showModal} modalClosed={this.handlerCloseForm}>
          <FundInvestPage {...this.props.currentFund} closeForm={this.handlerCloseForm} />
        </Modal>
        <div className={classes.wrapper}>
          <div className={classes.name}>
            {this.props.currentFund.name}
          </div>
          <div className={classes.description}>
            {this.props.currentFund.description_full}
          </div>
          <div className={classes.amount}>
            <span>
              {this.props.currentFund.amount_min}
              &nbsp;-&nbsp;
          {this.props.currentFund.amount_max}
            </span>
            <Button btnType='Success' clicked={() => this.handlerOpenForm(this.props.currentFund.id)}>Инвестировать</Button>
          </div>
          <div className={classes.closeButton}>
            <Button btnType='Danger' clicked={() => { this.props.history.push('/') }}>Закрыть</Button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isLoadingFund: store.funds.isLoadingFund,
    currentFund: store.funds.currentFund,
  }
}

export default connect(mapStateToProps)(FundPage);