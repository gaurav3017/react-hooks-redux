import './App.css';
import Users from './components/Users';
import Workouts from './components/Workouts'

function App() {
  return (
    <div className="App">
      <h1>React, Redux and Saga Demo</h1>
      <a href="https://github.com/gaurav3017" target="_blank" rel="noreferrer">GitHub</a>
      <Workouts />
      <Users />
    </div>
  );
}

export default App;
