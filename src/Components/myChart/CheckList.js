import React from 'react';

const CheckList = ({ series, checkItem }) => {
    function checkClick(id){
        return function(event){
            return checkItem(id)
        }
    }
    return(
        <span onClick={checkClick(series.id)} role="img" aria-label="checked">
            {series.check ? "✅" : "☑"}
        </span>
    )
}           

export default CheckList;