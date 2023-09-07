import React from 'react';

import { Triangle } from 'react-loader-spinner'

const LoadingSpinner = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '9999', // Ensure it's above other content
                background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            }}
        >
            <Triangle
                height="100"
                width="100"
                color="#f1f1f1"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
            <p style={{ marginTop: '10px', color: 'white', fontSize:'20px' }}>Loading models...</p>
        </div>
    );
};

export default LoadingSpinner;