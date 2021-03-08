//  pick up timestamp from API 1 , sort it and  display in timestamp display component
//  for user to choose the timestamp show dropdown list or selectdrodwon component
import React from 'react'

import { Form } from 'react-bootstrap';

function TimeStampDisp() {
    return (
        <div>
                <div> 
                    <label for="myDate">Choose a Date and Time  from this list:</label>
                    <input list="datetime" id="myDate" name="myDate" />
                    <datalist id="datetime" >
                            <option value="2021-03-03T18:42:31+08:00"/>
                            <option value="2021-03-03T18:39:51+08:00"/>
                            
                    < /datalist>   
                </div>   


                <div> 
                    <label for="myBrowser">Choose a Location from this list:</label>
                    <input list="browsers" id="myBrowser" name="myBrowser" />
                    <datalist id="browsers" >
                            <option value="Bedok"/>
                            <option value="siglap"/>
                            <option value="opera estate"/>
                            <option value="jln Eunos" />
                            <option value="Gelgang"/>
                            <option value="Punggol Field" />
                    < /datalist>   
                </div> 

            <button type="button" class="btn btn-info">Fetch TRaffic Images</button>
            <button type ="button" class="btn btn-info"> Fetch Weather Forecast</button>
            

        </div>
    )
}

export default TimeStampDisp;
