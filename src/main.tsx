
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import { BrowserRouter  } from "react-router-dom";
import Navbar from './components/Navbar.tsx';
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
    <Navbar/>
    <App />
    <Footer/>
</BrowserRouter>

)
