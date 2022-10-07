import Banner from "./Banner";
import Footer from './Footer';
import Home from './Home';
import Massage from './Massage';
import Danse from './Danse';
import Contact from './Contact';
import Profil from './Profil';
import Cours from './Cours';
import Galerie from './Galerie';
import Chant from './Chant';
import Calendrier from './Calendrier';
import Yoga from './Yoga';
import '../styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';




const history = createBrowserHistory({forceRefresh:true});

function App() {
  return (
    <div className="body_app">
      <Router  history={history}>
        <Banner>				
				</Banner>
        <Route path='/' exact component={Home}/> 
        <Route path='/galerie' exact component={Galerie}/> 
        <Route path='/calendrier' exact component={Calendrier}/> 
				<Route path='/contact' exact component={Contact}/>
				<Route path='/profil' exact component={Profil}/>
        <Route path='/cours' exact component={Cours}/>
        <Route path='/massage' exact component={Massage}/>
        <Route path='/danse' exact component={Danse}/>
        <Route path='/chant' exact component={Chant}/> 
        <Route path='/yoga' exact component={Yoga}/>
      </Router>
        <Footer>
	  			  <h4 className='footer'> Copyright</h4>      
			  </Footer>
    </div>
  );
}

export default App;
