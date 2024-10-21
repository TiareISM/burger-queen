// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BurgerLogin from './pages/Login';
import Pedidos from "./pages/Pedidos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BurgerLogin />} />
        <Route path="/pedidos" element={<Pedidos/>} />
      </Routes>
    </Router>
  );
}

export default App;
