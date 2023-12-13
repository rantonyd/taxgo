import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebsiteHeader from './components/websiteHeader';
import DashBoard from './app/dashboard';

function App() {
  return (
    <div >
      
      <WebsiteHeader/>
      <DashBoard/>
    </div>
  );
}

export default App;
