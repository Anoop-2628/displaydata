import React, { useEffect, useLayoutEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import Select from "react-dropdown-select";

import './Button.css';
const columns = [
    {
        name: 'Id',
        selector: 'id',
        width: '100px'
    },
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
        width: 'auto'
    },  {
        name: 'Date',
        selector: 'event_date_utc',
        width: '250px'

    }, {
        name: 'Flight Number ',
        selector: 'flight_number',
        width: '100px',
        sortable: true

    }, {
        name: 'Details',
        selector: 'details'

    }
];

const onChange = (data, props) => {
    props.fireOnClickData(data)
}

const rowClickhandler = (data, props) => {
    props.rowClickhandler(data);
}
export const ExpandableCopm = (props) => (
    <React.Fragment>
        {props.data.moreDetails ?
            <div className={'moreDetailsComponent'}>
                <table className={'tableData'}>
                    <tr>
                        <th>  {'Currency'}</th>
                        <th>  {'Languages'}</th>
                        <th>  {'Capital'}</th>
                    </tr>
                    <tr>
                        <td>{props.data.moreDetails.currencies.map((data, index) => {
                            return (
                                <React.Fragment >
                                    <div key={index}>
                                        {data.name}
                                    </div>
                                </React.Fragment>
                            )
                        })}</td>
                        <td>{props.data.moreDetails.languages.map((data, index) => {
                            return (
                                <React.Fragment >
                                    <div key={index}>
                                        {data.name}
                                    </div>
                                </React.Fragment>
                            )
                        })}</td>
                        <td>{props.data.moreDetails.capital ? props.data.moreDetails.capital : ''}</td>
                    </tr>
                </table>
            </div>
            : ''}
    </React.Fragment>
)


export const CountryList = (props) => {
    useEffect(() => {
 
        props.fireAjaxData()
    }, []);
    useLayoutEffect(()=>{

    },[])
    return (
    
         <div className ={'container'}>
            <div className='dropDown'>
                
                <Select
                    labelField={'title'}
                    clearable={true}
                    valueField={'title'}
                    options={props.CountryListdata.countryListData.data ? props.CountryListdata.countryListData.data : ''}
                    onChange={(values) => onChange(values, props)}
                    dropdownwidth={"30px"}
                    placeholder= {'Please Select Country'}
                    multi={true}

                />
            </div>
            <DataTable

                columns={columns}
                // expandableRows
              //  onRowClicked={(values) => rowClickhandler(values, props)}
                Clicked
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 15, 20, 25, 30]}
                data={props.CountryListdata.OnSelectedData && props.CountryListdata.OnSelectedData.length > 0 ? props.CountryListdata.OnSelectedData : props.CountryListdata.countryListData.data}
            //expandableRowsComponent={<ExpandableCopm />}
            />
            {/* <ExpandableCopm data={props.SlectedData ? props.SlectedData : ''}></ExpandableCopm>
            <DisplayNumberField></DisplayNumberField> */}
            </div>
        
    )

}


export const DisplayNumberField = ()=>{
   
const  [stateValue,updataValue] = useState({
        value: ''
    })  
function AddtoState (values){
    updataValue({value:values.target.value})
}
    
function findMissingValue (values){
    var a = values.split('');
    a.sort();
    for(var i=0; i<a.length;i++){
                if( (parseInt(a[i])+1) == parseInt(a[i+1])){
        }else{
            if( (a).indexOf(parseInt(a[i])+2)<0){
                        alert('pelase check the input values as more then one numve is missing from given  numebrs')
            }else{
            let missingNumber = parseInt(a[i])+1;
                    alert( "missing number " + missingNumber);
                break;
            }
        }
        
    }
}
    return(
    <div>
            
     {'Please enter sequence of number' } <input type= 'text' onBlur= {(event)=>AddtoState(event)}></input>
    <button onClick ={()=>findMissingValue(stateValue.value)}>{'click'}</button>

    </div>
    )
}


// export class DisplayNumberField extends React.Component(){
//     render(){
//         return(
//             <div></div>
//         )
//     }
// }