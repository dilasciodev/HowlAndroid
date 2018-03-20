import {
  CREATE_CODE,
  CREATE_EMAIL,
  CREATE_NAME,
  CREATE_LAST_NAME,
  CREATE_PASS,
  VERIFY_PHONE,
  HOME_ADDRESS,
  CREATE_FAKE_CODE
 } from './types';

 export const createName = (text) => {
   return {
     type: CREATE_NAME,
     payload: text
   };
 };

 export const createEmail = (text) => {
   return {
     type: CREATE_EMAIL,
     payload: text
   };
 };

 export const createLastName = (text) => {
   return {
     type: CREATE_LAST_NAME,
     payload: text
   };
 };

 export const createPass = (text) => {
   return {
     type: CREATE_PASS,
     payload: text
   };
 };

 export const createCode = (text) => {
   return {
     type: CREATE_CODE,
     payload: text
   };
 };

 export const createFakeCode = (text) => {
   return {
     type: CREATE_FAKE_CODE,
     payload: text
   };
 };

 export const homeAddress = (text) => {
   return {
     type: HOME_ADDRESS,
     payload: text
   };
 };

 export const verifyPhone = (text) => {
   return {
     type: VERIFY_PHONE,
     payload: text
   };
 };
