import './App.css';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Layout from './components/Layout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="Portfolio" element={<Portfolio />} />
              <Route path="Contact" element={<Contact />} />
            </Route>
          </Routes>      
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
