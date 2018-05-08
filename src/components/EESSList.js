import React from 'react';

const EESSList = ({eess=[],...props}) =>
    <div>
        {eess.map((val)=>{
            var styles = {
                height: '70px',
                width: '200px',
                backgroundColor: val.color,
                padding: '15px',
                margin: '20px'
        }
            return <label style={styles}>
                {val.nombre}
            </label>
        })
        }
    </div>


export default EESSList