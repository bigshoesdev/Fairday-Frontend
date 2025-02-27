import TextField from '@mui/material/TextField';

interface Props {
    label?: string;
    placeholder?: string;
    value: string;
    type: string;
    name?: string;
    style?: string;
    rows?: number;
    multiline?: boolean;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean | string;
    helperText?: string;
    onErrorClear?: () => void;
}

const TextInput = ({
    label,
    value,
    type,
    style,
    name,
    placeholder,
    rows = 1,
    multiline = false,
    disabled = false,
    onChange,
    error = false,
    onErrorClear,
}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onErrorClear) {
            onErrorClear();
        }

        onChange(event);
    };

    return (
        <TextField
            label={label}
            value={value}
            type={type}
            name={name}
            rows={rows}
            placeholder={placeholder}
            multiline={multiline}
            onChange={handleChange}
            className={style}
            disabled={disabled}
            error={error ? true : false}
            helperText={error}
            sx={{
                '& .MuiInputBase-input': {
                    fontSize: { xs: '12px', sm: '18px' }, // 12px on xs, 18px on sm and up
                },
                '& .MuiInputLabel-root': {
                    fontSize: { xs: '12px', sm: '18px' }, // Adjust label size as well
                },
                '& .MuiFormHelperText-root': {
                    fontSize: { xs: '12px', sm: '18px' } // Helper text size
                }
            }}
        />
    );
};

export default TextInput;

