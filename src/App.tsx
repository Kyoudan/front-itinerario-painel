import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { RoutesProject } from "./routes/routes";
import "./styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0101",
    },
    action: {
      disabled: "#494949",
      disabledOpacity: 1,
      disabledBackground: "#c2c2c2",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderWidth: "1px", // define a largura da borda
          borderColor: "#757575",
        },
      },
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <RoutesProject />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
