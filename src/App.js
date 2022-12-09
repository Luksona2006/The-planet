import Navigation from './components/Navigation'
import Mercury from './pages/Mercury.js'
import Venus from './pages/Venus.js';
import Earth from './pages/Earth.js';
import Mars from './pages/Mars.js';
import Jupiter from './pages/Jupiter.js';
import Saturn from './pages/Saturn.js';
import Uranus from './pages/Uranus.js';
import Neptune from './pages/Neptune.js';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
   <>
    <Navigation />
    <Router>
      <Switch>
        <Route exact path="/" component={Mercury}/>
        <Route path="/venus" component={Venus}/>
        <Route path="/earth" component={Earth}/>
        <Route path="/mars" component={Mars}/>
        <Route path="/jupiter" component={Jupiter}/>
        <Route path="/saturn" component={Saturn}/>
        <Route path="/uranus" component={Uranus}/>
        <Route path="/neptune" component={Neptune}/>
      </Switch>
    </Router>
   </>
  );
}

export default App;
