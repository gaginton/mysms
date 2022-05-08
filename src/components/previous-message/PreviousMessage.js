import React from 'react';

function PreviousMessage({ element }) {

    return (
        <div className="container">
            <div className="card prev-msg-card">

                <div className="prev-msg-header">
                    <div className='bold'>{element.tel}</div>
                    <div>{element.date}</div>
                </div>

                <div className='msg-content'>
                    <textarea
                        className="form-control"
                        id="msgFormInput"
                        rows="3"
                        defaultValue={element.msg}
                    />
                </div>

            </div>
        </div>
    );
}

export default PreviousMessage;
