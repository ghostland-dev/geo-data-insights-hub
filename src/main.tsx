
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add geo-specific colors to tailwind
document.documentElement.style.setProperty('--geo-blue', '#1e88e5');
document.documentElement.style.setProperty('--geo-teal', '#26a69a');

createRoot(document.getElementById("root")!).render(<App />);
