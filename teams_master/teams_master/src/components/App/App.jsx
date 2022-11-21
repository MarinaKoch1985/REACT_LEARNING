import ConfiguratipnsPage from "../../pages/ConfigurationsPage";
import TeamsPafe from "../../pages/TeamsPage";
import Nav from "../Nav";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <Nav />
      <Routes>
        
        <Route path="/configurations_page" element={<ConfiguratipnsPage />} />
        <Route path="/teams_page" element={<TeamsPafe />} />
        
      </Routes>
    </div>
  );
}

export default App;
