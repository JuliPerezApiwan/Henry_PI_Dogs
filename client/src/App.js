import './App.css';
import { Route } from 'react-router-dom'
import landing from './components/LandingPage/landing';

function App() {
  return (
    <div className="App">
      
      <Route path='/landing' component={landing}/>
    </div>
  );
}

export default App;
