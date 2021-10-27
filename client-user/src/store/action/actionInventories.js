import localHost from '../../apis/localHost'
import {
  ADD_INVENTORY,
  GET_INVENTORIES,
} from '../keys'

import Swal from "sweetalert2";

// const access_token = localStorage.getItem('access_token');

export function setInventories(payload) {
  return {
      type: GET_INVENTORIES,
      payload,
  };
}

export function setNewInventory(payload) {
  return {
      type: ADD_INVENTORY,
      payload,
  };
}

export function actionGetInventories(payload) {
  return async function(dispatch) {
      try {
          const access_token = localStorage.getItem('access_token');
          const { data } = await localHost({
              method: 'GET',
              url: `/inventories`,
              headers: {
                access_token
              },
          });
          dispatch(setInventories(data));
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

export function actionAddInventory(payload) {
  return async function(dispatch) {
    try {
      const access_token = localStorage.getItem('access_token');
      const { data } = await localHost({
        method: "POST",
        url: `/inventories`,
        headers: {
          access_token
        },
        data: payload
      })
      dispatch(setNewInventory(data))
    } catch (err) {
      console.log(err.response.data.msg);
    }
  }
}