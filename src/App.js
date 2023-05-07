import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-theme');
      showAlert('Dark Mode Enabled');

    } else {
      setTheme('light');
      document.body.classList.remove('dark-theme');
      showAlert('Light Mode Enabled');
    }
  };

  function showAlert(msg) {
    setAlert({
      msg: msg
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };


  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout toggleTheme={toggleTheme} theme={theme} alert={alert} />}>
          <Route index element={<TextForm theme={theme} showAlert={showAlert} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
