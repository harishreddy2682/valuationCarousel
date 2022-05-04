import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ValuationCarousel from './valuation_carousel/ValuationCarousel'
import Leaderboard from './leaderboard/Leaderboard'
import UpdateCategories from './updateCategories/UpdateCategories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UpdateCategories />} />
        <Route path='/valuationCarousel' element={<ValuationCarousel />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
