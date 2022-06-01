import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Game from '../Game/Game'
import { Routes, Route } from 'react-router-dom'



function App() {
 
  return (
<>
 <header>
	<Nav/>
 </header>
  <main>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game/:id" element={<Game/>} />
   </Routes>
  </main>
 <footer/>
</>      
  );
}

export default App;
