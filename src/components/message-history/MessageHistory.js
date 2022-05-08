import React from 'react';
import PreviousMessage from '../previous-message/PreviousMessage';

function MessageHistory() {
    let elementEx1 = {
        id: 1,
        date: "Sunday, 17-May-20 11:18:45 UTC",
        tel: "999-888-7777",
        msg: "Hi! This is a message. I'm a fancy message that lives inside a box."
    }
    let elementEx2 = {
        id: 2,
        date: "Sunday, 17-May-20 11:18:45 UTC",
        tel: "999-888-7777",
        msg: "Hi! This is a second message. Due to time, I'll be repeating it and messing up the key/id vals"
    }

    let msgCountTotal = 23

    // let showMSG =
    //     element !== undefined &&
    //     element !== null &&
    //     element !== "";

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Message History <span>({msgCountTotal})</span></h5>
                    {/* {showMSG && <PreviousMessage ...} */}
                    <PreviousMessage
                        element={elementEx1}
                    // key={elementEx1.id}, date={elementEx1.date}, tel={elementEx1.tel}, msg={elementEx1.msg}
                    />
                    <PreviousMessage
                        element={elementEx2}
                    />
                    <PreviousMessage
                        element={elementEx2}
                    />
                    <PreviousMessage
                        element={elementEx2}
                    />
                    <PreviousMessage
                        element={elementEx2}
                    />
                </div>
            </div>
        </div>
    );
}

export default MessageHistory;
