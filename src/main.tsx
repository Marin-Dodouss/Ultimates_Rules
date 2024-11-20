import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RemotionRoot } from './Root';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RemotionRoot />
  </StrictMode>
);