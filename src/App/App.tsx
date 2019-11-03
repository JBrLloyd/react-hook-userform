import React from 'react';

import './App.scss';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';
import Sidecar from "../Sidecar/Sidecar";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <UserForm></UserForm>
      </div>
      <Sidecar></Sidecar>
    </div>
  );
}

export default App;
