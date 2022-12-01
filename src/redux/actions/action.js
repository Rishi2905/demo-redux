import { Feature } from "../constants/constant";

export function setCount(payload) {
    return {
        type: Feature.SET_COUNT,
        payload
    }
}

export function getUserData(payload) {
    return {
        type: Feature.GET_USER_DATA,
        payload
    }
}

export function setUserData(payload) {
    return {
        type: Feature.SET_USER_DATA,
        payload
    }
}

export function setFirstName(payload) {
    return {
        type: Feature.SET_FIRST_NAME,
        payload
    }
}

export function setLastName(payload) {
    return {
        type: Feature.SET_LAST_NAME,
        payload
    }
}
export function setUserInArray(payload) {
    return {
        type: Feature.SET_USER_IN_ARRAY,
        payload
    }
}

export function setProductArray(payload) {
    return {
        type: Feature.SET_PRODUCT_LIST,
        payload
    }
}
