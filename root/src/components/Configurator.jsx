import React from 'react';
import { useCustomization } from '../context/Customization';

const Configurator = () => {
    const { material, setMaterial } = useCustomization();
    const { color, setColor } = useCustomization();
    console.log('material', material);
    console.log('color', color);
    return (
        <div className='config_wrap'>
            <div className="configurator material">
                <button className={`config_btn leather ${material === 'leather' ? "btn_active" : ""}`} onClick={() => setMaterial("leather")}>L</button>
                <button className={`config_btn fabric ${material === 'fabric' ? "btn_active" : ""}`} onClick={() => setMaterial("fabric")}>F</button>
            </div>
            <div className="configurator">
                <button className={`config_btn red ${color === 'red' ? "btn_active" : ""}`} onClick={() => setColor('#be061f')}></button>
                <button className={`config_btn blue ${color === 'blue' ? "btn_active" : ""}`} onClick={() => setColor('#619fdd')}></button>
                <button className={`config_btn green ${color === 'green' ? "btn_active" : ""}`} onClick={() => setColor('#038e42')}></button>
            </div>
        </div>
    )
}

export default Configurator;