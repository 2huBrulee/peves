import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {Button} from 'react-bootstrap';

const GridSave = ({data,rows=[{total: 100, sis: 75, pct: 75}],columns=[{key:'total', name:'Total'},
    {key:'sis', name:'SIS'},
    {key:'pct', name:'Porcentaje'}
],...props}) =>
    <div>
        {console.log(data.eess)}
        {console.log(Object.keys(data.eess[0]))}
        {console.log(data.eess[0])}
        <ReactDataGrid
            minHeight={600}
            rowGetter={(i) => data.eess[i]}
            rowsCount={data.eess.length}
            columns={Object.keys(data.eess[0]).map(val=>{
                return {key:val, name:val}
            })}
        />
        <Button bsStyle="primary" type="submit" >SUBIR A LA BASE DE DATOS</Button>
    </div>

export default GridSave