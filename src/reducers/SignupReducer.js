import {
  CREATE_NAME,
  CREATE_LAST_NAME,
  CREATE_EMAIL,
  CREATE_PASS,
  CREATE_CODE,
  CREATE_FAKE_CODE,
  VERIFY_PHONE,
  HOME_ADDRESS
} from '../actions/types';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  emailaddress: '',
  password: '',
  cancelcode: '',
  fackecancelcode: '',
  verifyphone: '',
  homeaddress: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case CREATE_NAME:
      return { ...state, firstname: action.payload };
    case CREATE_LAST_NAME:
      return { ...state, lastname: action.payload };
    case CREATE_EMAIL:
      return { ...state, emailaddress: action.payload };
    case CREATE_PASS:
      return { ...state, password: action.payload };
    case CREATE_CODE:
      return { ...state, cancelcode: action.payload };
    case CREATE_FAKE_CODE:
      return { ...state, fakecancelcode: action.payload };
    case VERIFY_PHONE:
      return { ...state, verifyphone: action.payload };
    case HOME_ADDRESS:
      return { ...state, homeaddress: action.payload };

    default:
      return state;
  }
};
