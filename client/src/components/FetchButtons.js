import React from 'react';
import { Link } from 'react-router-dom';

const FetchButtons = () => {
    return (
        <div className="container-sm my-4">
            <Link style={{width: "100%"}} to="/tasks" className="btn btn-outline-dark btn-lg btn-block my-2">Your Tasks</Link>
            <Link style={{width: "100%"}} to="/notes" className="btn btn-outline-dark btn-lg btn-block my-2">Your Notes</Link>
        </div>
    );
};

export default FetchButtons;