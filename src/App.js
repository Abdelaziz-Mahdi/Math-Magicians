import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function Nav() {
  return (
    <>
      <a href="/"><h1>Math magicians</h1></a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/calculator">Calculator</a></li>
          <li><a href="/quote">Quote</a></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

function App() {
  const saveClass = 'color-white';
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote sav={saveClass} />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
