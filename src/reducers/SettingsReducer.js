import {
  EDIT_FIRST_NAME,
  EDIT_LAST_NAME,
  EDIT_EMAIL,
  EDIT_PHONE,
  EDIT_PHONE_NUMBER

} from '../actions/types';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  emailaddress: '',
  phonenumber: '',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EDIT_FIRST_NAME:
     return { ...state, firstname: action.payload };
    case EDIT_LAST_NAME:
      return { ...state, lastname: action.payload };
    case EDIT_EMAIL:
      return { ...state, emailaddress: action.payload };
    case EDIT_PHONE_NUMBER:
      return { ...state, phonenumber: action.payload };


    default:
      return state;
  }
};
