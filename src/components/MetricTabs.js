import React from 'react';
import {Tab,Tabs} from 'react-bootstrap'
import MetricUpload from './MetricUpload'

const MetricTabs = ({data,metrics=[1,2,3,4,5,6,7],...props}) =>
    <Tabs bsStyle='pills' defaultActiveKey={1} id="uncontrolled-tab-example">
    {metrics.map((val,me)=>
                <Tab eventKey={val} key={val} title={"METRICA ".concat(val.toString())}>
                    <MetricUpload key={val} me={val} data={data[me][0]} {...props}/>
                </Tab>
        )}
    </Tabs>

export default MetricTabs