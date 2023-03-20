import './App.css';
import { Route } from 'react-router-dom'
import landing from './components/LandingPage/landing';
import home from './components/Home/home';

function App() {
  return (
    <div className="App">
      
      <Route path='/landing' component={landing}/>
      <Route path='/home' component={home}/>
    </div>
  );
}

export default App;
