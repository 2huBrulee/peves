import React from 'react';
import ReactDataGrid from 'react-data-grid';
import {Button} from 'react-bootstrap';

const GridSave = ({rows=[{total: 100, sis: 75, pct: 75}],columns=[{key:'total', name:'Total'},
    {key:'sis', name:'SIS'},
    {key:'pct', name:'Porcentaje'}
],...props}) =>
    <div>
        <ReactDataGrid
            minHeight={300}
            rowGetter={(i) => rows[i]}
            rowsCount={1}
            columns={columns}
        />
        <Button bsStyle="primary" type="submit" >SUBIR A LA BASE DE DATOS</Button>
    </div>

export default GridSave