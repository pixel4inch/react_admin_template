import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode]= useState();

  return (
    <div className="app">
      <h4>React Admin Tempalte</h4>
    </div>
  );
}

export default App;
