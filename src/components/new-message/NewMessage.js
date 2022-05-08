import React from 'react';

function NewMessage() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">New Message</h5>
                <form>
                    <div className="form-group">
                        <label htmlFor="telFormInput">Phone number</label>
                        <input type="tel" className="form-control" id="telFormInput" placeholder="(555)-555-5555" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="msgFormInput">Message</label>
                        <textarea className="form-control" id="msgFormInput" rows="3"></textarea>
                    </div>
                    <div className="new-message-button-row">
                        <button className='btn btn-light rnd-button clear-btn'>Clear</button>
                        <button className="btn btn-dark rnd-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewMessage;
