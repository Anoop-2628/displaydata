
import { connect } from 'react-redux';
import { CountryList } from './index';
import { fireAjaxData, fireOnClickData, rowClickhandler } from './Action';


const MapStateToPros = (state) => {

    return {
        CountryListdata: state.CountryReducer ? state.CountryReducer : null,
        SlectedData: state.GetMoreDetails ? state.GetMoreDetails : null
    }

}

const MapDispatchToProps = {
    fireAjaxData: fireAjaxData,
    fireOnClickData: fireOnClickData,
    rowClickhandler: rowClickhandler
}

export const CountryContainer = connect(MapStateToPros, MapDispatchToProps)(CountryList)