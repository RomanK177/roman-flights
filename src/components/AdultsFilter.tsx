import React, { useState } from 'react';

// Mui
import { Stack, Typography, Menu, MenuItem, Button } from '@mui/material/';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// Context
import { useSearchContext } from '../contexts/SearchContext';

function AdultsFilter() {
    const { searchParams, setSearchParams } = useSearchContext();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    const handleClose = (e: any) => {
        e.stopPropagation();
        setOpen(false);
        setAnchorEl(null);
    };

    const handleAdultsFilter = (increase: boolean) => {
        let newSearchParams = { ...searchParams };
        increase
            ? newSearchParams.filters.adults++
            : newSearchParams.filters.adults--;

        setSearchParams(newSearchParams);
    };
    return (
        <Button onClick={handleClick}>
            <Person3OutlinedIcon />
            <Typography>{searchParams.filters.adults}</Typography>
            <ArrowDropDownOutlinedIcon />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={(e) => handleClose(e)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography>Adults</Typography>
                        <Button
                            variant={
                                searchParams.filters.adults === 1
                                    ? 'myDisabled'
                                    : 'containedLightBlue'
                            }
                            onClick={() => handleAdultsFilter(false)}
                        >
                            -
                        </Button>
                        <Typography>{searchParams.filters.adults}</Typography>
                        <Button
                            variant="containedLightBlue"
                            onClick={() => handleAdultsFilter(true)}
                        >
                            +
                        </Button>
                    </Stack>
                </MenuItem>
            </Menu>
        </Button>
    );
}

export default AdultsFilter;
