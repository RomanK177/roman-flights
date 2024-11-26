import React, { useState } from 'react';

// Mui
import { Stack, Typography, Menu, MenuItem } from '@mui/material/';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// Context
import { useSearchContext } from '../contexts/SearchContext';

// Parts
import AdultsFilter from './AdultsFilter';
import ClassFilter from './ClassFilter';

function SearchBarFilters() {
    return (
        <Stack direction="row">
            <AdultsFilter />
            <ClassFilter />
        </Stack>
    );
}

export default SearchBarFilters;
