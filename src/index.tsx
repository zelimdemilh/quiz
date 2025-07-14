import { createRoot } from 'react-dom/client';

import './index.css';
import App from '@app/index';
import '@ant-design/v5-patch-for-react-19';

// @ts-ignore
createRoot(document.getElementById('root')!).render(<App />);
