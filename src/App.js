import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";
import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || "light"
  );

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
