import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path='/' exactcomponent={Home} />
            <Route path='/movie/:imdbID' component={MovieDetails} />
            <Route component={PageNotFound} />
          </Routes>
          <Footer />
        </Router>
    </div>
    </>
  );
}

export default App;
