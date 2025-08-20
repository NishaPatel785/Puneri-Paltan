import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './section/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './section/global/Header/Header';
import Footer from './section/global/Footer/Footer';
import Players from './section/Players/PlayersMain';
import SinglePlayer from './section/Players/Section1/SinglePlayer/SinglePlayer';
import PaltanWorld from './section/PaltanWorld/PaltanWorld';
import Gallery from './section/Gallery/Gallery';
import PuneriTv from './section/PuneriTv/PuneriTv';
import Match from './section/Gallery/Match/Match';
import NewsAnchor from './section/NewsAnchor/NewsAnchor';
import OtherPlayer from './section/Players/OtherPlayer/OtherPlayer';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players" element={<Players />} />
          <Route path="/player/:id" element={<SinglePlayer />} />
          <Route path="/paltan-world" element={<PaltanWorld />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Match />} />
          <Route path="/puneri-tv" element={<PuneriTv />} />
          <Route path="/news" element={<NewsAnchor />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
