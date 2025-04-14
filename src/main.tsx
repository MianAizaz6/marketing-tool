import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './app.js';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(<App />);
