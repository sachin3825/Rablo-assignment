import "./App.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/employeeDetails/:id' element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
