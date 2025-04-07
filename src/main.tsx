
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Import CSS files directly in main.tsx
import './index.css'
import './styles/base.css'
import './styles/dark-mode.css'
import './styles/components.css'
import './styles/dashboard.css'
import './styles/ag-grid.css'

createRoot(document.getElementById("root")!).render(<App />);
