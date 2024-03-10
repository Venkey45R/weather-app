import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Main';
import Forms from './Forms';
import Display from "./Display";
function App() {
  return (
    <div className="bg-purple-200 h-screen">
      <Router>
        <Routes>
          <Route path="/Main" Component={Main} />
          <Route path="/Form" Component={Forms} />
          <Route path="/Display" Component={Display} />
          <Route index element={<Forms />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
