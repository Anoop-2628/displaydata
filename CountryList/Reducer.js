import Axios from "axios"
import { combineReducers } from "redux";

const intialReducer = { countryListData: '' }

export const CountryReducer = (state = intialReducer, action) => {
    switch (action.type) {
        case 'DATA_SUCESS': {
            let newState = { ...state };
            newState.countryListData = action.data;
            return newState
        }

        case 'REQUEST_ERROR': {
            let data = { ...state }
            return data
        }
        case 'ONCLICK_DATA': {
            const newState = { ...state }
            newState.OnSelectedData = action.data;
            return newState;
        }
        default:
            return state
    }
}

export const GetMoreDetails = (state = intialReducer, action) => {
    switch (action.type) {
        case 'ROW_CLICK': {
            let newState = { ...state };
            newState.moreDetails = action.data;
            return newState
        }
        default:
            return state
    }
}

export const CombineReducer = combineReducers({

    CountryReducer,
    GetMoreDetails

})

