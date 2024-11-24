import React, { Suspense, lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';

// Mui
import { ThemeProvider } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
import theme from './styles/CustomTheme';

// Parts
const Homepage = lazy(() => import('./pages/Homepage'));
const ErrorScreen = lazy(() => import('./pages/ErrorScreen'));

const queryClient = new QueryClient();

function App() {
    const router = createHashRouter([
        {
            path: '/',
            element: (
                <Suspense fallback={<LinearProgress />}>
                    {/* <StudentLayout> */}
                    <Homepage />
                    {/* </StudentLayout> */}
                </Suspense>
            ),

            errorElement: (
                <Suspense fallback={<LinearProgress />}>
                    <ErrorScreen />
                </Suspense>
            ),
        },
    ]);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
