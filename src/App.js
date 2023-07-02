import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MyDetails from "./components/MyDetails";
import PrivateRoute from "./helpers/protected";

function App() {
  return (
    <Routes>
      {/* protected User Routes  */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="details" element={<MyDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
