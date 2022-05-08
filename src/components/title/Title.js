import React from 'react';

function Title({ children }) {
    return (
        <div className="container">
            <span className="title-text">
                {children}
            </span>
        </div>
    );
};

export default Title;


