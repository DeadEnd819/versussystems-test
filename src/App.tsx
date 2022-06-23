import { Routes, Route } from 'react-router-dom'
import { Modals } from "./components";
import { StartScreen, CharacterScreen } from "./containers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/character" element={<CharacterScreen />} />
      </Routes>
      <Modals />
    </>
  )
}

export default App
