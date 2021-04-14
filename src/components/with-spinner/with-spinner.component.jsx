import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <div class='spinner-overlay'>
            <div class='spinner-container' />
        </div>
    ) : (
        <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner;
