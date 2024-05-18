import AuthProvider from "./AuthProvider";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Productos from "./Paginas/Productos";
import Descuentos from "./Paginas/Descuentos";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/descuentos" element={<Descuentos />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App; 