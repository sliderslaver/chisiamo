import React from 'react' 
import Slideshow from './components/slideshow';
import Topnavbar from './components/topnavbar';
import Bottomnavbar from './components/bottomnavbar'
import Chisiamo from'./chisiamo.js';

function App() {
  return (
    <div className="App">
      <Topnavbar/>
      <Slideshow/>
      <Chisiamo/>
      <Bottomnavbar/>
      </div>
  );
}

export default App;
