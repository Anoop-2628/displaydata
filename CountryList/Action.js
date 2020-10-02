import axios from 'axios';
export const DATA_SUCESS = 'DATA_SUCESS';
export const FIRE_ON_LOAD = 'FIRE_ON_LOAD';

export const FireOnLoad = (data) => ({
    type: FIRE_ON_LOAD,
    data: data
})

export const fireOnClickData = (data) => ({
    type: 'ONCLICK_DATA',
    data: data
})

export const rowClickhandler = (data) => ({
    type: 'ROW_CLICK',
    data: data
})
export const fireAjaxData = (data) => {
    const url = 'https://api.spacexdata.com/v3/history';
    return function (dispatch) {
        dispatch({
            type: 'DATA_REQUEST'
        });
        axios.get(
            url
        ).then(data => dispatch({
            type: DATA_SUCESS,
            data: data
        })).catch(error => dispatch({
            type: 'REQUEST_ERROR'
        }))
    }
}