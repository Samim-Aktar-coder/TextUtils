import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Alert from './Alert';

export default function Layout(props) {
  return (
    <div>
      <Navbar toggleTheme={props.toggleTheme} theme={props.theme} />
      <div className="main">
        <Alert alert={props.alert} theme={props.theme} />
        <Outlet />
      </div>
    </div>
  );
}
