import React from 'react';
import GridSave from './GridSave';
import FilePickerNLabel from "./FilePickerNLabel";
import {Button} from 'react-bootstrap';

const MetricUpload = ({data,me,onClick,...props}) =>
    <div>
        <FilePickerNLabel me={me} {...props}/>
        <Button bsStyle="primary" type="submit" onClick={(me)=>onClick(me)}>SUBIR A LA BASE DE DATOS</Button>

        {data.months.map((n,i)=>{
            {console.log(i,n)}
            return <GridSave key={i} data={n} {...props}/>
        })}

    </div>

export default MetricUpload