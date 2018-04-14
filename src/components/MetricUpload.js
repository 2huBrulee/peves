import React from 'react';
import GridSave from './GridSave';
import FilePickerNLabel from "./FilePickerNLabel";

const MetricUpload = ({...props}) =>
    <div>
        <FilePickerNLabel/>
        <GridSave/>
    </div>

export default MetricUpload