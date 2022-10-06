import React, {useState} from 'react';

const Text = () => {
    const [value, setValue] = useState('Введите текст');
    return (
        <div>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={event=>setValue(event.target.value)}/>
        </div>
    );
};

export default Text;