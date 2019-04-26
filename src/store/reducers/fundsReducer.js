import * as Constants from '../constants';

const initialState = {
  funds: [],
  currentFund: null,
  isLoading: false,
  isLoadingFund: false,
};

export function fundsReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_FUNDS_PENDING: {
      state = { ...state, isLoading: true };
      break;
    }
    case Constants.GET_FUNDS_FULFILLED: {
      state = {
        ...state,
        isLoading: false,
        funds: action.payload.data,
      };
      break;
    }
    case Constants.GET_FUNDS_REJECTED: {
      state = {
        ...state,
        isLoading: false,
      };
      break;
    }

    case Constants.GET_FUND_PENDING: {
      state = { ...state, isLoadingFund: true };
      break;
    }
    case Constants.GET_FUND_FULFILLED: {
      state = {
        ...state,
        isLoadingFund: false,
        currentFund: action.payload.data,
      };
      break;
    }
    case Constants.GET_FUND_REJECTED: {
      state = {
        ...state,
        isLoadingFund: false,
        currentFund: null,
      };
      break;
    }

    case Constants.UPDATE_FUND_PENDING: {
      state = { ...state, isLoadingFund: true };
      break;
    }
    case Constants.UPDATE_FUND_FULFILLED: {
      state = {
        ...state,
        isLoadingFund: false,
      };
      break;
    }
    case Constants.UPDATE_FUND_REJECTED: {
      state = {
        ...state,
        isLoadingFund: false,
        currentFund: null,
      };
      break;
    }

    default: { state = { ...state }; }
  }
  return state;
}
