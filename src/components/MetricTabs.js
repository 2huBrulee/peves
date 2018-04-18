import React from 'react';
import {Tab,Tabs} from 'react-bootstrap'
import MetricUpload from './MetricUpload'

const MetricTabs = ({data,metrics=[1],...props}) =>
    <Tabs bsStyle='pills' defaultActiveKey={1} id="uncontrolled-tab-example">
        {metrics.map((val)=>
            <Tabs bsStyle='pills' key={val} defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={val} key={val} title={"METRICA ".concat(val.toString())}>
                    {data[0].months.map((n,i)=>{
                        return <MetricUpload key={val*12+i} data={n} {...props}/>
                    })}

                </Tab>
            </Tabs>
        )}
    </Tabs>

export default MetricTabs