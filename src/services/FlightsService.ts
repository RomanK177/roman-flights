import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

// Types
import { AirPortSearchResultType } from '../types/searchFlightTypes';

const rapidKey = '71616017f8msh278dc76385f39d0p1fa0b2jsn99b054693411';
const rapidHost = 'sky-scrapper.p.rapidapi.com';

export const useGetFlights = (id?: string) => {
    const QUERY_KEY = ['getFlights', id];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: QUERY_KEY,
        queryFn: async () => {
            const options = {
                method: 'GET',
                url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getPriceCalendar',
                params: {
                    originSkyId: 'BOM',
                    destinationSkyId: 'JFK',
                    fromDate: '2024-02-20',
                    currency: 'USD',
                },
                headers: {
                    'x-rapidapi-key': rapidKey,
                    'x-rapidapi-host': rapidHost,
                },
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    });

    return { data, isLoading, isError, error, refetch };
};

export const useSearchAirport = (str?: string) => {
    const QUERY_KEY = ['searchAirport', str];

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: QUERY_KEY,
        queryFn: async () => {
            const options = {
                method: 'GET',
                url: 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport',
                params: {
                    query: str,
                    locale: 'en-US',
                },
                headers: {
                    'x-rapidapi-key': rapidKey,
                    'x-rapidapi-host': rapidHost,
                },
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        },
        enabled: !!str, // Only fetch when search is not empty
    });

    return { data, isLoading, isError, error, refetch };
};
