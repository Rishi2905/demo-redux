import { combineReducers } from "redux";
import { FeatureReducer } from "./featureReducer";

export const rootReducer = combineReducers({
    feature: FeatureReducer
})

// feature.count