import { GET_FUNDS, GET_FUND, UPDATE_FUND } from '../constants';
import instance from '../axios-docs';


export function getFunds() {
  return {
    type: GET_FUNDS,
    payload: instance.get('/api/funds'),
  };
}

export function getFund(id) {
  return {
    type: GET_FUND,
    payload: instance.get(`/api/funds/${id}`),
  };
}

export function updateFund(id) {
  return {
    type: UPDATE_FUND,
    payload: instance.post(`/api/funds/${id}`),
  };
}
