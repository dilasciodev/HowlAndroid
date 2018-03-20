import {
  SAVE_ID,
  SAVE_TOKEN,
  SAVE_FIRST_NAME,
  SAVE_LAST_NAME,
  SAVE_EMAIL,
  SAVE_ADDRESS,
  SAVE_ADDRESS_2,
  SAVE_CITY,
  SAVE_STATE,
  SAVE_ZIP,
  SAVE_LATITUDE,
  SAVE_LONGITUDE,
  SAVE_COPS,
  SAVE_CANCEL,
  SAVE_SILENCE,
  SAVE_PHONE,
  SAVE_CONFIRM

} from '../actions/types';

const INITIAL_STATE = {
  userid: '',
  usertoken: '',
  userfirstname:'',
  userlastname:'',
  useremail:'',
  useraddress:'',
  useraddress2:'',
  usercity:'',
  userstate:'',
  userzip:'',
  userlatitude:'',
  userlongitude:'',
  usercops:'',
  usercancel:'',
  usersilence:'',
  userphone:'',
  userconfirm:''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case SAVE_ID:
      return { ...state, userid: action.payload };
    case SAVE_TOKEN:
      return { ...state, usertoken: action.payload};
    case SAVE_FIRST_NAME:
      return { ...state, userfirstname: action.payload};
    case SAVE_LAST_NAME:
      return { ...state, userlastname: action.payload};
    case SAVE_EMAIL:
      return { ...state, useremail: action.payload};
    case SAVE_ADDRESS:
      return { ...state, useraddress: action.payload};
    case SAVE_ADDRESS_2:
      return { ...state, useraddress2: action.payload};
    case SAVE_CITY:
      return { ...state, usercity: action.payload};
    case SAVE_STATE:
      return { ...state, userstate: action.payload};
    case SAVE_ZIP:
      return { ...state, userzip: action.payload};
    case SAVE_LATITUDE:
      return { ...state, userlatitude: action.payload};
    case SAVE_LONGITUDE:
      return { ...state, userlongitude: action.payload};
    case SAVE_COPS:
      return { ...state, usercops: action.payload};
    case SAVE_CANCEL:
      return { ...state, usercancel: action.payload};
    case SAVE_SILENCE:
      return { ...state, usersilence: action.payload};
    case SAVE_PHONE:
      return { ...state, userphone: action.payload};
    case SAVE_CONFIRM:
      return { ...state, userconfirm: action.payload};
    default:
      return state;
  }
};
