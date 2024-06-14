import ReactDOM from 'react-dom/client';

import ThemeProvider from './providers/ThemeProvider';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
