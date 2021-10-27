import localHost from '../../apis/localHost'
import {
  ADD_INVENTORY,
  DELETE_INVENTORY,
  EDIT_INVENTORY,
  GET_INVENTORIES,
  GET_INVENTORY_DETAIL,
} from '../keys'

import Swal from "sweetalert2";

// const access_token = localStorage.getItem('access_token');

export function setInventories(payload) {
  return {
      type: GET_INVENTORIES,
      payload,
  };
}

export function setInventory(payload) {
  return {
      type: GET_INVENTORY_DETAIL,
      payload,
  };
}

export function setNewInventory(payload) {
  return {
      type: ADD_INVENTORY,
      payload,
  };
}

export function deleteInventory(payload) {
  return {
      type: DELETE_INVENTORY,
      payload,
  };
}

export function editInventory(data, inventoryId) {
  return {
      type: EDIT_INVENTORY,
      payload: {
        id: inventoryId,
        data
      },
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

export function actionGetInventory(inventoryId) {
  return async function(dispatch) {
      try {
          const access_token = localStorage.getItem('access_token');
          const { data } = await localHost({
              method: 'GET',
              url: `/inventories/${inventoryId}`,
              headers: {
                access_token
              },
          });
          dispatch(setInventory(data));
          return data
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
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.msg,
      });
      console.log(err.response.data.msg);
    }
  }
}

export function actionEditInventory(payload, inventoryId) {
  return async function(dispatch) {
    try {
      const access_token = localStorage.getItem('access_token');
      const { data } = await localHost({
        method: "PUT",
        url: `/inventories/${inventoryId}`,
        headers: {
          access_token
        },
        data: payload
      })
      dispatch(editInventory(data, inventoryId))
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.msg,
      });
      console.log(err.response.data.msg);
    }
  }
}

export function actionDeleteInventory(inventoryId) {
  return async function(dispatch) {
    try {
      const access_token = localStorage.getItem('access_token');
      const { data } = await localHost({
        method: "DELETE",
        url: `/inventories/${inventoryId}`,
        headers: {
          access_token
        }
      })
      dispatch(deleteInventory(inventoryId))
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.msg,
      });
      console.log(err.response.data.msg);
    }
  }
}