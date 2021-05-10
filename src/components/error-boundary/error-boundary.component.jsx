import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasErrored: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <div className="error-image-overlay">
                    <div className="error-image-container">
                        <img src='https://i.imgur.com/yW2W9SC.png' alt='error image'  />
                    </div>
                    <div className="error-text">Sorry, this page is broken</div>
                </div>
            );
        }

        return this.props.children;
    }

}

export default ErrorBoundary;
