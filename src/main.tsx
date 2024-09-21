import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { applyTheme } from './lib/utils';

import './styles/index.scss';
import './styles/icons-rounded.scss';

applyTheme({
  seedColor: '#4285F4',
  colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
  font: {
    title: '"Roboto"',
    content: '"Roboto"',
    code: '"Roboto Mono"',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
