import * as Router from 'react-router-dom';
import * as Pages from './pages';

export default function App() {
  return (
    <>
      <Router.BrowserRouter>
        <Router.Routes>
          <Router.Route
            path="/dashboard"
            element={<Pages.Dashboard />}
          ></Router.Route>
          <Router.Route
            path="/faturas"
            element={<Pages.Faturas />}
          ></Router.Route>
          <Router.Route path="*" element={<Pages.Dashboard />} />
        </Router.Routes>
      </Router.BrowserRouter>
    </>
  );
}
