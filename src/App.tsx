import * as Router from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Faturas } from './pages/Faturas/Faturas';

export default function App() {
  return (
    <>
      <Router.BrowserRouter>
        <Router.Routes>
          <Router.Route
            path="/dashboard"
            element={<Dashboard />}
          ></Router.Route>
          <Router.Route path="/faturas" element={<Faturas />}></Router.Route>
          <Router.Route path="*" element={<Dashboard />} />
        </Router.Routes>
      </Router.BrowserRouter>
    </>
  );
}
