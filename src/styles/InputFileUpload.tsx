import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    // height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

interface InputFileUploadProps {
    multiple?: boolean;
    startIcon?: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    fileCategory?: string;
    sx?: any;
}

export default function InputFileUpload({
    multiple,
    startIcon,
    onChange,
    value,
    fileCategory,
    sx,
    ...props
}: InputFileUploadProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (fileInputRef?.current && fileCategory === 'quizz') {
            fileInputRef?.current?.setAttribute('webkitdirectory', '');
            fileInputRef?.current?.setAttribute('directory', '');
        }
    }, [fileCategory]);

    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={startIcon}
            sx={{
                background: '#E3E3E3',
                color: '#1E1E1E',
                borderRadius: '7.5px',
                width: 'min(100%,123px)',
                marginBlockStart: '16px',
                textTransform: 'capitalize',
                boxShadow: 'unset',
                border: '1px solid #767676',
                '&:hover': {
                    color: '#fff',
                },
                '&.Mui-disabled': {
                    borderColor: '#B3B3B3',
                },
                ...sx,
            }}
        >
            {value}
            <VisuallyHiddenInput
                ref={fileInputRef}
                type="file"
                onChange={onChange}
                {...(multiple ? { multiple: true } : {})}
            />
        </Button>
    );
}
