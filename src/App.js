import React from 'react'
import './App.css';
import HookCounter from './components/HookCounter'
import IntervalHook from './components/IntervalHook';
import Mouse from './components/Mouse';
import MouseContainer from './components/MouseContainer';
import DataFetching from './DataFetching';

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <Mouse/>   */}
      {/* <MouseContainer/> */}
      {/* <IntervalHook/> */}
      <DataFetching/>
    </div>
  );
}

export default App;
