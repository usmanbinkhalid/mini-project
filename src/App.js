import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Checkout from "./routes/Checkout";
import Dog from "./routes/Dog";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./ui/NavBar";

function App() {
  const theme = createTheme({
    palette: {
      siteYellow: {
        main: "#FE5502",
        contrastText: "#FFFFFF",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Dog />} path="/dog/:name" />
        <Route element={<Checkout />} path="/checkout" />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
