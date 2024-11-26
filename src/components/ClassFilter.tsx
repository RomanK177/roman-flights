import React, { useState, useEffect } from 'react';

// Mui
import {
    Menu,
    MenuItem,
    Button,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material/';

// Context
import { useSearchContext } from '../contexts/SearchContext';

const options = ['economy', 'premium_economy', 'business', 'first'];

function ClassFilter() {
    const { searchParams, setFlightResults } = useSearchContext();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
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

    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        event.stopPropagation();
        setSelectedIndex(index);
        setAnchorEl(null);
        setOpen(false);
    };

    useEffect(() => {
        let newSearchParams = { ...searchParams };
        newSearchParams.filters.class = options[selectedIndex];

        setFlightResults(newSearchParams);
    }, [selectedIndex]);

    return (
        <Button onClick={handleClick}>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ bgcolor: 'background.paper', padding: '0' }}
            >
                <ListItemButton
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                >
                    <ListItemText
                        primary={options[selectedIndex]}
                        sx={{ textTransform: 'capitalize' }}
                    />
                </ListItemButton>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{ textTransform: 'capitalize' }}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </Button>
    );
}

export default ClassFilter;
