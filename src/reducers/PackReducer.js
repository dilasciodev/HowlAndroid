import {
  PACKNAME_CHANGED,
  PACKEMAIL_CHANGED,
  PACKPHONE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  packname: '',
  packemail: '',
  packphone: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case PACKNAME_CHANGED:
      return { ...state, packname: action.payload };
    case PACKEMAIL_CHANGED:
      return { ...state, packemail: action.payload};
    case PACKPHONE_CHANGED:
      return { ...state, packphone: action.payload};
    default:
      return state;
  }
};
