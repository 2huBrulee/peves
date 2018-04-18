import React from 'react';
import GridSave from './GridSave';
import FilePickerNLabel from "./FilePickerNLabel";

const MetricUpload = ({data,...props}) =>
    <div>
        <FilePickerNLabel {...props}/>
        <GridSave data={data} />
    </div>

export default MetricUpload