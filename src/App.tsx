import { AuthProvider } from "./contexts/AuthContext/AuthContext";
import { RoutesProject } from "./routes/routes";
import "./styles/global.css";

function App() {
  return (
    <AuthProvider>
      <RoutesProject />
    </AuthProvider>
  );
}

export default App;
