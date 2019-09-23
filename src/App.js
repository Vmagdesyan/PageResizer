import React from 'react';

import { RedBlock } from './components/RedBlock';
import { BlueBlock } from './components/BlueBlock';
import { ResizeTracker } from './components/ResizeTracker';
import { ResizeTrackerWithHooks } from './components/ResizeTrackerWithHooks';

import './App.css';

function App() {
  return (
    <div className="App">
      <RedBlock/>
      <BlueBlock/>
      <ResizeTracker/>
      <ResizeTrackerWithHooks/>
    </div>
  );
}

export default App;
