import React from 'react';

import { ColorRing } from 'react-loader-spinner'

const LoadingSpinner = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '9999', // Ensure it's above other content
            }}
        >
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#353535', '#535353', '#7e7f81', '#9b9ca0', '#bbbbbd']}
            />
        </div>
    );
};

export default LoadingSpinner;