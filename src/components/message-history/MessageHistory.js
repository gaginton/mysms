import React from 'react';
import PreviousMessage from '../previous-message/PreviousMessage';

function MessageHistory() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Message History <span>(##)</span></h5>
                    <PreviousMessage />
                    <PreviousMessage />
                    <PreviousMessage />
                    <PreviousMessage />
                    <PreviousMessage />
                    <PreviousMessage />
                </div>
            </div>
        </div>
    );
}

export default MessageHistory;
