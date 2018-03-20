import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
 } from './types';

export const apiRequest = (text) => {
  return {
    type: FETCH_POSTS_REQUEST
  };
};

export const apiSuccess = (text) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    status: 'error',
    error: 'Oops'
  };
};

export const apiFailure = (text) => {
  return {
    type: FETCH_POSTS_FAILURE,
    status: 'success'
  };
};
