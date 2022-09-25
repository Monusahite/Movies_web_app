import './App.css';
import NavBar from './component/NavBar';
import Banner from './component/Banner'
import MovieList from './component/MovieList';
import Fav from './component/Fav';
import Overview from './component/Overview';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<><Banner /><MovieList /> </>} />
          <Route path='/favourites' element={<><Fav/></>} />
          <Route path='/overview' element={<><Overview/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
