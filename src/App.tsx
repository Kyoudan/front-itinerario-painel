import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { RoutesProject } from "./routes/routes";
import "./styles/global.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <AuthProvider>
      <RoutesProject />
    </AuthProvider>
  );
}

export default App;
