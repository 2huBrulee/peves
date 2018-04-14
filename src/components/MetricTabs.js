import React from 'react';
import {Tab,Tabs} from 'react-bootstrap'
import MetricUpload from './MetricUpload'

const MetricTabs = ({metrics=[1,2,3,4,5,6,7,8],...props}) =>
    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        {metrics.map((val)=>
            <Tab eventKey={val} key={val} title={"METRICA ".concat(val.toString())}>
                <MetricUpload key={val} />
            </Tab>
        )}
    </Tabs>

export default MetricTabs