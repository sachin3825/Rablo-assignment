import "./App.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import EmployeeDetails from "./pages/EmployeeDetails";
import SearchBar from "./components/Searchbar";

function App() {
  return (
    <>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/employeeDetails/:id' element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
