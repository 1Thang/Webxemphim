import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from './component/home/Home';

function App() {
  return (
    
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  element={<Home />} />
      </Routes>
    </Router>
    
  
  );
}

export default App;