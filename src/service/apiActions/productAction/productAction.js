// import RestApi from '../RestApi'
import { SET_MESSAGE } from 'src/constants/userConstants'
import ProductApiService from 'src/service/restAPI/ProductApiService'
import {
  FAIL_GET_IMAGE,
  GET_IMAGE,
  GET_PRODUCT,
  GET_PRODUCTS,
  SAVE_FAIL,
  // UPDATE_PRODUCT,
  // DELETE_PRODUCT
  SAVE_PRODUCT,
  SET_PRODUCT_MESSAGE
} from '../../redux/constants'

export const saveProduct = (formData, token) => async (dispatch) => {
  return ProductApiService.save(formData, token)
    .then((response) => {
      dispatch({
        type: SAVE_PRODUCT
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: 200,
          data: {
            message: "Successfully Saved"
          }
        }
      })
      return Promise.resolve();

    },
      (error) => {
        console.log(error)
        const message = (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message || error.error_message ||
          error.toString();

        const status = (error.response &&
          error.response.data &&
          error.response.data.code) ||
          error.toString();
        console.log(status)
        dispatch({
          type: SAVE_FAIL
        })
        dispatch({
          type: SET_MESSAGE,
          payload: {
            status: status,
            data: {
              message: message
            }
          }
        })
        return Promise.reject();
      }
    )
}
export const getProducts = (token) => async (dispatch) => {
  return ProductApiService.getProducts(token).then(
    (response) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: {
          status: 200,
          data: {
            products: response.data
          },
        },
      })
      return Promise.resolve();
    },
    (error) => {
      const message = (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message || error.error_message ||
        error.toString();

      const status = (error.response &&
        error.response.data &&
        error.response.data.code) || error.status ||
        error.toString();

      dispatch({
        type: SET_PRODUCT_MESSAGE,
        payload: {
          status: status,
          data: {
            message: message
          }
        }
      })
      return Promise.reject();
    }
  )

}
export const getImage = (image, token) => async (dispatch) => {
  return ProductApiService.getImage(image, token).then(
    (response) => {
      console.log(response)
      dispatch({
        type: GET_IMAGE,
        payload: {
          status: response.status,
          data: {
            image: response.data
          }
        }
      })
      return Promise.resolve();

    },
    (error) => {
      const message = (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message || error.error_message ||
        error.toString();

      const status = (error.response &&
        error.response.data &&
        error.response.data.code) || error.status ||
        error.toString();
      dispatch({
        type: FAIL_GET_IMAGE
      })
      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: status,
          data: {
            message: message
          }
        }
      })
      return Promise.reject();

    }
  )
}
export const getProduct = (id, token) => async (dispatch) => {
  return ProductApiService.getProduct(id, token).then(
    (response) => {
      dispatch({
        type: GET_PRODUCT,
        payload: {
          status: 200,
          data: {
            product: response.data
          }
        }
      })
      return Promise.resolve();
    },
    (error) => {
      const message = (error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message || error.error_message ||
        error.toString();

      const status = (error.response &&
        error.response.data &&
        error.response.data.code) || error.status ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: {
          status: status,
          data: {
            message: message
          }
        }
      })
      return Promise.reject();

    }
  )
}

export function deleteProduct() { }

export function updateProduct() { }
