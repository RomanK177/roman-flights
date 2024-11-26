import { ReactNode } from 'react';
import { AirPortSearchResultType } from './search.flight.types';

export interface SearchContextType {
    searchParams: SearchParams;
    setSearchParams: any;
    setFlightResults: any;
    flightResults: any;
}
export interface SearchParams {
    from: AirPortSearchResultType | undefined;
    to: AirPortSearchResultType | undefined;
    dates: { start: Date | null; end: Date | null };
    filters: { [key: string]: any };
}

export interface SearchContextProviderProps {
    children: ReactNode;
}
