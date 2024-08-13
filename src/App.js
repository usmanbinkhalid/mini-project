import * as React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Dog from "./Dog";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      siteYellow: {
        main: "#FE5502",
        contrastText: "#FFFFFF"
      }
  }})
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Checkout />} path="/checkout" />
      <Route element={<Dog />} path="/dog/:name" />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
       