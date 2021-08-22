import { ADD_BRANCH_MODAL, ADD_BRAND_MODAL, ALERT_MODAL, EDIT_PRODUCT_MODAL, SET_PRODUCTEDITMODAL_VISIBILIT } from "../constants"

const modalVisibilityReducer = (state = {}, action) => {
    // let response = {
    //     type: action.type,
    //     action: action.type,
    //     state: {}
    // }
    switch (action.type) {
        case SET_PRODUCTEDITMODAL_VISIBILIT:
            // response.state.visible = action.payload.data.visible
            return {
                visible: action.payload.data.visible,
                action: action.payload.data.action,
                icon: action.payload.data.icon
            };
        case EDIT_PRODUCT_MODAL:
            return {
                visible: action.payload.data.visible,
                action: action.payload.data.action,
                product: action.payload.data.product,
                icon: action.payload.data.icon
            }
        case ALERT_MODAL:
            return {
                alert: action.payload.data.alert,
            }
        case ADD_BRANCH_MODAL:
            return {
                visible: action.payload.data.visible,
                action: action.payload.data.action,
                branch: action.payload.data.branch,
                icon: action.payload.data.icon
            }
        case ADD_BRAND_MODAL:
            return {
                visible: action.payload.data.visible,
                action: action.payload.data.action,
                branch: action.payload.data.branch,
                icon: action.payload.data.icon
            }
        default:
            return state
    }
}

export default modalVisibilityReducer