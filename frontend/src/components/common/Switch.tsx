import styles from './css/Switch.module.css';

import { useState } from 'react';

const Switch: React.FC<ISwitch> = ({ onChange }) => {
    const [isChecked, setIsChecked] = useState(true);
    
    return (
        <input
            type='checkbox'
            id='switch'
            checked={isChecked}
            onChange={e => {onChange(e.target.checked), setIsChecked((prev) => !prev);}}
            className={styles.switch}
        />
    );
};

export default Switch;