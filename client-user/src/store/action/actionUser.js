import localHost from '../../apis/localHost'
import {
  SET_CURRENT_USER,
  SET_USER_PERMISSION
} from '../keys'

import Swal from "sweetalert2";

export function setCurrentUser(payload) {
  return {
      type: SET_CURRENT_USER,
      payload,
  };
}

export function setUserPermissions(payload) {
  return {
      type: SET_USER_PERMISSION,
      payload,
  };
}

export function actionLogin(payload) {
  return async function(dispatch) {
      try {
          const { data } = await localHost({
              method: 'POST',
              url: `/users/login`,
              data: payload,
          });
          dispatch(setCurrentUser(data));
          dispatch(setUserPermissions(data.permissions));
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("id", data.id);
          localStorage.setItem("email", data.email);
          localStorage.setItem("permissions", data.permissions);
      } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.msg,
          });
          console.log(err.response.data);
      }
  };
}