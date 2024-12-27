import React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
    label: string;
    value: string;
    type: string;
    style: string;
    rows?: number; 
    multiline?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
    label,
    value,
    type,
    style,
    rows = 1, 
    multiline = false, 
    onChange,
}: Props) => {
    return (
        <TextField
            label={label}
            value={value}
            type={type}
            rows={rows}
            multiline={multiline}
            onChange={onChange}
            className={style}
        />
    );
};

export default TextInput;