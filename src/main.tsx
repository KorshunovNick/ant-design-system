import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { crmTokens } from './shared/designTokens/tokens/crmTokens.ts';
import { parseDesignTokens } from './shared/designTokens/utils/parseDesignTokens.ts';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          ...parseDesignTokens(crmTokens),
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
