import './App.css';
import { Route } from 'react-router-dom'
import landing from './components/LandingPage/landing';
import Home from './components/Home/home';
import DogDetail from './components/DogDetail/dogDetail';

function App() {
  return (
    <div className="App">
      <Route path='/landing' component={landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/dogs/:id' component={DogDetail} />
    </div>
  );
}

export default App;
