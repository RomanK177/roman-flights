import HomepageHero from '../components/HomepageHero';

// Mui
import { Stack, Container } from '@mui/material/';
import SearchBar from '../components/SearchBar';

// Context
import { SearchContextProvider } from '../contexts/SearchContext';
import SearchResults from '../components/SearchResults';

function Homepage() {
    return (
        <div>
            <Container>
                <HomepageHero />
                <SearchContextProvider>
                    <Stack alignItems="center">
                        <SearchBar />
                        <SearchResults />
                    </Stack>
                </SearchContextProvider>
            </Container>
        </div>
    );
}

export default Homepage;
