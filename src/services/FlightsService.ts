import axios from 'axios';
import { useMutation } from 'react-query';

// Types
import { AirPortSearchResultType } from '../types/search.flight.types';
import { SearchParams } from '../types/search.context';

// API Configuration
const rapidKey = '71616017f8msh278dc76385f39d0p1fa0b2jsn99b054693411';
const rapidHost = 'sky-scrapper.p.rapidapi.com';

// Helper function for API requests
const axiosRequest = async (options: any) => {
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error: any) {
        console.error('API Error:', error.response || error.message);
        throw error;
    }
};

// Hook for Searching Flights
export const useSearchFlights = () => {
    const {
        mutateAsync: handleSearchFlights,
        isLoading,
        isError,
        data,
        error,
    } = useMutation({
        mutationFn: async (searchParams: SearchParams) => {
            const options = {
                method: 'GET',
                url: 'https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights',
                params: {
                    originSkyId: searchParams.from?.skyId,
                    destinationSkyId: searchParams.to?.skyId,
                    originEntityId: searchParams.from?.entityId,
                    destinationEntityId: searchParams.to?.entityId,
                    cabinClass: searchParams.filters.class || 'economy',
                    adults: searchParams.filters.adults || 1,
                    date: searchParams.dates.start,
                    returnDate: searchParams.dates.end,
                    sortBy: 'best',
                    currency: 'USD',
                },
                headers: {
                    'x-rapidapi-key': rapidKey,
                    'x-rapidapi-host': rapidHost,
                },
            };
            return axiosRequest(options);
        },
        onSuccess: (data) => {
            console.log('Flights search successful:', data);
            // Add additional success logic here if needed
        },
        onError: (error: any) => {
            console.error('Error during flight search:', error);
            // Optional: Dispatch custom error events or handle errors more gracefully
        },
    });

    return { handleSearchFlights, isLoading, isError, data, error };
};

// Hook for Searching Airports
export const useSearchAirport = () => {
    const {
        mutateAsync: handleSearchAirport,
        isLoading,
        isError,
        data,
        error,
    } = useMutation({
        mutationFn: async (query: string) => {
            const options = {
                method: 'GET',
                url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
                params: {
                    query,
                    locale: 'en-US',
                },
                headers: {
                    'x-rapidapi-key': rapidKey,
                    'x-rapidapi-host': rapidHost,
                },
            };
            return axiosRequest(options);
        },
        onSuccess: (data) => {
            console.log('Airport search successful:', data);
            // Add additional success logic here if needed
        },
        onError: (error: any) => {
            console.error('Error during airport search:', error);
            // Optional: Dispatch custom error events or handle errors more gracefully
        },
    });

    return { handleSearchAirport, isLoading, isError, data, error };
};
