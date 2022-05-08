import React from 'react';

function PreviousMessage() {
    return (
        <div className="container">
            <div className="card">

                <div className="prev-msg-header">
                    <div className='bold'>555-555-5555</div>
                    <div>Sunday, 17-May-20 11:18:45 UTC</div>
                </div>

                <div className='msg-content'>
                    <textarea
                        className="form-control" 
                        id="msgFormInput"
                        rows="3" 
                        defaultValue={`Hi! This is a message. I'm a fancy message that lives inside a box.`}
                    />
                </div>

            </div>
        </div>
    );
}

export default PreviousMessage;
