import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { applyTheme } from './lib/utils';

import './styles/index.scss';
import './styles/icons-rounded.scss';

const sessionScheme = sessionStorage.getItem('theme');
const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
const colorScheme = (sessionScheme ?? prefersTheme) as 'light' | 'dark';

applyTheme({
  seedColor: '#4285F4',
  colorScheme,
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
