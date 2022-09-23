import './App.css';
import NavBar  from './component/NavBar';
import Banner from './component/Banner'
import MovieList from './component/MovieList';
import Fav from './component/Fav';

function App() {
  return (
    <>
    <NavBar/>
     {/* <Banner/> 
     <MovieList/> */}
     <Fav/>
    </>
  );
}

export default App;
