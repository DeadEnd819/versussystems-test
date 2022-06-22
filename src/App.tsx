import { Routes, Route } from 'react-router-dom'
// import {  } from './containers'
import { TestComponent } from './components'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestComponent />} />
        <Route path="/character" element={<h1>Страница персонажа</h1>} />
      </Routes>
      {/*<Modals />*/}
    </>
  )
}

export default App
