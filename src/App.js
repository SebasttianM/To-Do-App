import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import TaskList from './components/TaskList';

function App() {
  const [darkmode,setDarkmode] = useState(false)
  return (
    <div className="App">
      <Banner setDarkmode={setDarkmode}  darkmode={darkmode}/>
      <TaskList setDarkmode={setDarkmode} darkmode={darkmode}/>
    </div>
  );
}
export default App;
