import React from 'react';


const Configurator = () => {
    return (
        <div className="configurator">
            <button className='config_btn red' onClick={() => handleClick('red')}></button>
            <button className='config_btn blue' onClick={() => handleClick('blue')}></button>
            <button className='config_btn green' onClick={() => handleClick('green')}></button>
        </div>
    )

}

export default Configurator;