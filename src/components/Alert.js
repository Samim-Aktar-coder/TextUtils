import React from 'react';

export default function Alert(props) {
    return (
        <div className='alert-box'>
            {props.alert && <div className={`alert ${props.alert.msg.length > 0 ? 'show-alert' : ''}`}>
                <p>{props.alert.msg}</p>
            </div>}
        </div>
    );
}
