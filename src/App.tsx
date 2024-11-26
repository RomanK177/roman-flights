import { Suspense, lazy } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    <Homepage />
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
                <ToastContainer />
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
