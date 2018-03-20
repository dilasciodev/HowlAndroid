import {
  EDIT_FIRST_NAME,
  EDIT_PHONE_NUMBER

 } from './types';

 export const editFirstName = (text) => {
   return {
     type: EDIT_FIRST_NAME,
     payload: text
   };
 };

 export const editPhoneNumber = (text) => {
   return {
     type: EDIT_PHONE_NUMBER,
     payload: text
   };
 };
