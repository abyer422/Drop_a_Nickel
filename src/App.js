import './styles/App.css';
import { AuthProvider } from './contexts/authContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import About from './pages/About';
import Contact from './pages/Contact';
import UploadForm from './pages/uploadForm';
import Hours from './pages/Hours';
import Lessons from './pages/Lessons';
import Login from './pages/Login';
import ForgotPassword from './pages/forgotPassword';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/Drop_a_nickel">
        <Navbar />
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/inventory" exact component={Inventory} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/uploadform" exact component={UploadForm} />
            <Route path="/hours" exact component={Hours} />
            <Route path="/lessons" exact component={Lessons} />
            <Route path="/login" exact component={Login} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
          </Switch>
         </AuthProvider> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
