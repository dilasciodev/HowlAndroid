import {
  PACKNAME_CHANGED,
  PACKEMAIL_CHANGED,
  PACKPHONE_CHANGED
 } from './types';

 export const packnameChanged = (text) => {
   return {
     type: PACKNAME_CHANGED,
     payload: text
   };
 };

 export const packemailChanged = (text) => {
   return {
     type: PACKEMAIL_CHANGED,
     payload: text
   };
 };

 export const packphoneChanged = (text) => {
   return {
     type: PACKPHONE_CHANGED,
     payload: text
   };
 };
