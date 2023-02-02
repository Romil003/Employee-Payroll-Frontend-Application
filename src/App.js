import './App.css';
import PayrollForm  from './components/payroll-form/payroll-form';
import Home from './components/payroll-home/home';
import { Routes,
    Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/add-employee" element = {<PayrollForm />} />
          <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
