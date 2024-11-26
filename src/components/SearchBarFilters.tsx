// Mui
import { Stack } from '@mui/material/';

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
