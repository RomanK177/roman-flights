import { useState, createContext, useMemo, useContext, useEffect } from 'react';

// Types
import {
    SearchParams,
    SearchContextType,
    SearchContextProviderProps,
} from '../types/search.context';

// Create Context
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Provider Component
export const SearchContextProvider = ({
    children,
}: SearchContextProviderProps) => {
    const [searchParams, setSearchParams] = useState<SearchParams>({
        from: undefined,
        to: undefined,
        dates: { start: null, end: null },
        filters: { adults: 1, class: 'economy' },
    });
    const [flightResults, setFlightResults] = useState<any>(undefined);

    useEffect(() => {
        console.log(searchParams);
    }, [searchParams]);

    useEffect(() => {
        console.log('res', flightResults);
    }, [flightResults]);

    // Memoize the context value to prevent unnecessary renders
    const SearchContextData = useMemo(
        () => ({
            searchParams,
            setSearchParams,
        }),
        [searchParams], // Only re-memoize when searchParams changes
    );

    // Add flightResults and setFlightResults directly
    const contextValue = {
        ...SearchContextData,
        flightResults,
        setFlightResults,
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};

// Custom Hook for using the context
export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error(
            'useSearchContext must be used within a SearchContextProvider',
        );
    }
    return context;
};

export default SearchContext;
