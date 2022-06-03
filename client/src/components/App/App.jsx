import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Game from '../Game/Game'
import { Routes, Route } from 'react-router-dom'
import {Header} from '../../styled/styledComponents'

function App() {
  return (
<>
 <Header>
	<Nav/>
 </Header>
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
