import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ValuationCarousel from './valuation_carousel/ValuationCarousel'
import Leaderboard from './leaderboard/Leaderboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/valuationCarousel' element={<ValuationCarousel />} />
        <Route path='/' element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
