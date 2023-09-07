import React from 'react';

import { Triangle} from 'react-loader-spinner'

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
<Triangle
  height="100"
  width="100"
  color="#f1f1f1"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
        </div>
    );
};

export default LoadingSpinner;