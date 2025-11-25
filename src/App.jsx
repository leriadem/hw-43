import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './index.css';

const activeStyle = {
  fontWeight: '700',
  textDecoration: 'underline',
};

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* опціонально: 404 */}
          <Route path="*" element={<h2>Сторінка не знайдена (404)</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

