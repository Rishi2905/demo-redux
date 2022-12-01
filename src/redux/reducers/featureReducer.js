import { Feature } from "../constants/constant";
import { InitailState } from "../store/initialState";

export function FeatureReducer(state = InitailState, action) {

    switch (action.type) {
        case Feature.SET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case Feature.GET_USER_DATA:
            return {
                ...state,
                userData: state.userData
            }
        case Feature.SET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case Feature.SET_FIRST_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    firstName: action.payload
                }
            }
        case Feature.SET_LAST_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    lastName: action.payload
                }
            }
        case Feature.SET_USER_IN_ARRAY:
            return {
                ...state,
                userArray: [...state.userArray, action.payload]
            }
        case Feature.SET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }
        default:
            return {
                ...state
            }
    }

}