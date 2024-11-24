import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ThemeProvider from './providers/ThemeProvider';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
