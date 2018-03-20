
import { Actions } from 'react-native-router-flux';
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

 } from './types';



export const saveId = (text) => {
  return {
    type: SAVE_ID,
    payload: text
  };
};

export const saveToken = (text) => {
  return {
    type: SAVE_TOKEN,
    payload: text
  };
};

export const saveFirstName = (text) => {
  return {
    type: SAVE_FIRST_NAME,
    payload: text
  };
};

export const saveLastName = (text) => {
  return {
    type: SAVE_LAST_NAME,
    payload: text
  };
};

export const saveEmail = (text) => {
  return {
    type: SAVE_EMAIL,
    payload: text
  };
};

export const saveAddress = (text) => {
  return {
    type: SAVE_ADDRESS,
    payload: text
  };
};

export const saveAddress2 = (text) => {
  return {
    type: SAVE_ADDRESS_2,
    payload: text
  };
};

export const saveCity = (text) => {
  return {
    type: SAVE_CITY,
    payload: text
  };
};

export const saveState = (text) => {
  return {
    type: SAVE_STATE,
    payload: text
  };
};

export const saveZip = (text) => {
  return {
    type: SAVE_ZIP,
    payload: text
  };
};

export const saveLatitude = (text) => {
  return {
    type: SAVE_LATITUDE,
    payload: text
  };
};

export const saveLongitude = (text) => {
  return {
    type: SAVE_LONGITUDE,
    payload: text
  };
};

export const saveCops = (text) => {
  return {
    type: SAVE_COPS,
    payload: text
  };
};

export const saveCancel = (text) => {
  return {
    type: SAVE_CANCEL,
    payload: text
  };
};

export const saveSilence = (text) => {
  return {
    type: SAVE_SILENCE,
    payload: text
  };
};

export const savePhone = (text) => {
  return {
    type: SAVE_PHONE,
    payload: text
  };
};

export const saveConfirm = (text) => {
  return {
    type: SAVE_CONFIRM,
    payload: text
  };
};
