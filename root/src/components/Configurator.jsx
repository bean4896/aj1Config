import React from 'react';
import { useCustomization } from '../context/Customization';

const Configurator = () => {
    const { material, setMaterial } = useCustomization();
    const { color, setColor } = useCustomization();

    return (
        <div className='config_wrap'>
            <div className="configurator material">
                <button className={`config_btn mat leather ${material === 'leather' ? "btn_active" : ""}`} onClick={() => setMaterial("leather")}>Leather</button>
                <button className={`config_btn mat fabric ${material === 'fabric' ? "btn_active" : ""}`} onClick={() => setMaterial("fabric")}>fabric</button>
            </div>

            <div className="configurator">
                <button className={`config_btn red ${color === '#be061f' ? "btn_active" : ""}`} onClick={() => setColor('#be061f')}></button>
                <button className={`config_btn blue ${color === '#619fdd' ? "btn_active" : ""}`} onClick={() => setColor('#619fdd')}></button>
                <button className={`config_btn green ${color === '#038e42' ? "btn_active" : ""}`} onClick={() => setColor('#038e42')}></button>
            </div>

            <div className='buildby'>
          <a href="http://keyi48.com/" target="_blank">
            Built by keyi
          </a>
        </div>
        </div>
    )
}

export default Configurator;