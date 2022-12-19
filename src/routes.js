import Checkout from 'pages/checkout';
import Home from 'pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
        </Routes>
    </Router>
  );
}